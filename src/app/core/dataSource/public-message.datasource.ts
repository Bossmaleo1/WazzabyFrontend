import {PublicMessage} from '@wazzabysama/core/model/public-message.model';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import {PublicMessageService} from '@wazzabysama/core/services/public-message.service';
import {catchError, finalize, map, tap} from 'rxjs/operators';
import {plainToClassFromExist} from 'class-transformer';
import {AuthService} from '@wazzabysama/core/services/auth.service';


export class PublicMessageDatasource implements DataSource<PublicMessage> {
    private _length = 100000;
    private _pageSize = 10;
    private _cachedData = Array.from<PublicMessage>({length: this._length});
    private _fetchedPages = new Set<number>();
    private readonly _dataStream = new BehaviorSubject<(PublicMessage)[]>(this._cachedData);
    private readonly _subscription = new Subscription();
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    constructor(
        private publicMessageService: PublicMessageService,
        private _authService: AuthService) {
    }

    connect(collectionViewer: CollectionViewer): Observable<(PublicMessage)[]> {
        this._subscription.add(
            collectionViewer.viewChange.subscribe(range => {
                const startPage = this._getPageForIndex(range.start + 1);
                const endPage = this._getPageForIndex(range.end - 1);
                for (let i = startPage; i <= endPage; i++) {
                    if (i !== 0) {
                        this._fetchPage(i);
                    }
                }
            }),
        );
        return this._dataStream;
    }

    disconnect(): void {
        this._subscription.unsubscribe();
    }

    private _getPageForIndex(index: number): number {
        return Math.floor(index / this._pageSize);
    }

    private _fetchPage(page: number) {
        if (this._fetchedPages.has(page)) {
            return;
        }
        this._fetchedPages.add(page);
        this.loadingSubject.next(true);
        this.publicMessageService.getPublicMessage({problematic_id: 81, page}).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false)),
            map(response => plainToClassFromExist(Array<PublicMessage>(), response['hydra:member']))
        ).subscribe(publicMessages => {
            this._cachedData.splice(
                page * this._pageSize,
                this._pageSize,
                ...publicMessages
            );
            this._dataStream.next(this._cachedData);
        });
    }
}

import {PublicMessage} from '@wazzabysama/core/model/public-message.model';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of, Subject, Subscription} from 'rxjs';
import {PublicMessageService} from '@wazzabysama/core/services/public-message.service';
import {catchError, finalize, map, tap} from 'rxjs/operators';
import {plainToClassFromExist} from 'class-transformer';
import {AuthService} from "@src/app/core/services/auth.service";


export class PublicMessageDatasource implements DataSource<PublicMessage | undefined> {
    /*private publicMessageSubject = new BehaviorSubject<PublicMessage[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();
    private _fetchedPages = new Set<number>();
    private _nextPage = 1;
    private _page = 0;

    constructor(
        private publicMessageService: PublicMessageService,
        private _authService: AuthService) {
    }

    connect(collectionViewer: CollectionViewer): Observable<PublicMessage[]> {
        collectionViewer.viewChange.subscribe(range => {
            console.log(range);
            console.log('Hello Bossmaleo 1!!');
        });
        return this.publicMessageSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.publicMessageSubject.complete();
        this.loadingSubject.complete();
    }

    loadPublicMessage(data: { problematic_id: number, page: number }) {
        this._page = data.page;
        this.loadingSubject.next(true);
        this.publicMessageService.getPublicMessage(data).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false)),
            map(response => {
                this._nextPage = +response['hydra:view']['hydra:next'].split('=')[3];
                return plainToClassFromExist(Array<PublicMessage>(), response['hydra:member']);
            })
        ).subscribe(publicMessages => {
            return this.publicMessageSubject.next(publicMessages);
        });
    }

    private _fetchPage(page: number) {
        if (this._fetchedPages.has(page)) {
            return;
        }
        this._fetchedPages.add(page);


    }*/
    private _length = 100000;
    private _pageSize = 10;
    private _cachedData = Array.from<PublicMessage>({length: this._length});
    private _fetchedPages = new Set<number>();
    private readonly _dataStream = new BehaviorSubject<(PublicMessage | undefined)[]>(this._cachedData);
    private readonly _subscription = new Subscription();

    constructor(
        private publicMessageService: PublicMessageService,
        private _authService: AuthService) {
    }

    connect(collectionViewer: CollectionViewer): Observable<(PublicMessage | undefined)[]> {
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
        this.publicMessageService.getPublicMessage({problematic_id: 81, page}).pipe(
            catchError(() => of([])),
            // finalize(() => this.loadingSubject.next(false)),
            map(response => plainToClassFromExist(Array<PublicMessage>(), response['hydra:member']))
        ).subscribe(publicMessages => {
            this._cachedData.splice(
                page * this._pageSize,
                this._pageSize,
                ...publicMessages
            );
            this._dataStream.next(this._cachedData);
            console.log(this._dataStream);
        });
    }

    /*loadPublicMessage(data: { problematic_id: number, page: number }) {
        this.publicMessageService.getPublicMessage(data).pipe(
            catchError(() => of([])),
           /finalize(() => this.loadingSubject.next(false)),
            map(response => plainToClassFromExist(Array<PublicMessage>(), response['hydra:member']))
        ).subscribe(publicMessages => {
            this._cachedData.splice(
                page * this._pageSize,
                this._pageSize,
                ...Array.from({length: this._pageSize}).map((_,i) => publicMessages),
            );
            this._dataStream.next(this._cachedData);
        });
    }*/

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'wazzaby-public-message',
    templateUrl: './public-message.component.html',
    styleUrls: ['./public-message.component.scss']
})
export class PublicMessageComponent implements OnInit {

    @Input() firstName: string;
    @Input() lastName: string;

    constructor() {
        console.log(this.firstName);
    }

    ngOnInit(): void {}

}

/**
 * Created by MALEO-SAMA 27-03-2022
 */
import {Expose} from 'class-transformer';

export class Problematic {
    @Expose({name: 'id'})
    private _id: number;
    @Expose({name: 'wording'})
    private _wording: string;
    @Expose({name: 'icon'})
    private _icon: string;
    @Expose({name: 'language'})
    private _language: string;

    constructor(
        id: number,
        wording: string,
        icon: string,
        language: string
    ) {
        this._id = id;
        this._wording = wording;
        this._icon = icon;
        this._language = language;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get wording(): string {
        return this._wording;
    }

    set wording(value: string) {
        this._wording = value;
    }

    get icon(): string {
        return this._icon;
    }

    set icon(value: string) {
        this._icon = value;
    }

    get language(): string {
        return this._language;
    }

    set language(value: string) {
        this._language = value;
    }
}

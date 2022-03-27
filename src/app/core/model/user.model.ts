import {Problematic} from '@wazzabysama/core/model/problematic.model';
import {Expose, Type} from "class-transformer";

/**
 * Created by MALEO-SAMA 27-03-2022
 */
export class User {
    private _id: number;
    private _email: string;
    private _online: number;
    private _anonymous: number;
    private _firstName: string;
    private _lastName: string;
    private _token: string;
    private _image: [string];
    private _roles: [string];
    /*@Type(() => Problematic)
    @Expose({ name: 'problematic' })*/
    private _problematic: Problematic;

    constructor(
        id: number,
        email: string,
        online: number,
        anonymous: number,
        firstName: string,
        lastName: string,
        token: string,
        image: [string],
        roles: [string],
        problematic: Problematic
    ) {
        this._id = id;
        this._email = email;
        this._online = online;
        this._anonymous = anonymous;
        this._firstName = firstName;
        this._lastName = lastName;
        this._token = token;
        this._image = image;
        this._roles = roles;
        this._problematic = problematic;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }

    get roles(): [string] {
        return this._roles;
    }

    set roles(value: [string]) {
        this._roles = value;
    }

    get online(): number {
        return this._online;
    }

    set online(value: number) {
        this._online = value;
    }

    get anonymous(): number {
        return this._anonymous;
    }

    set anonymous(value: number) {
        this._anonymous = value;
    }

    get image(): [string] {
        return this._image;
    }

    set image(value: [string]) {
        this._image = value;
    }

    get problematic(): Problematic {
        return this._problematic;
    }

    set problematic(value: Problematic) {
        this._problematic = value;
    }
}


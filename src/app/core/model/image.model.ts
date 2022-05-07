import {Expose} from 'class-transformer';

export class Image {
    @Expose({name: 'id'})
    private _id: number;
    @Expose({name: 'imageName'})
    private _imageName: string;


    constructor(id: number, imageName: string) {
        this._id = id;
        this._imageName = imageName;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get imageName(): string {
        return this._imageName;
    }

    set imageName(value: string) {
        this._imageName = value;
    }
}

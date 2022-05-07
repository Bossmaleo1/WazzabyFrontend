import {User} from '@wazzabysama/core/model/user.model';
import {Expose, Type} from 'class-transformer';

export class PublicMessage {
    @Expose({name: 'id'})
    public id: number;
    @Type(() => Date)
    @Expose({name: 'published'})
    public published: string;
    @Expose({name: 'anonymous'})
    public anonymous: number;
    @Expose({name: 'state'})
    public state: number;
    @Expose({name: 'wording'})
    public wording: string;
    @Expose({name: 'content'})
    public content: string;
    @Type(() => User)
    @Expose({name: 'user'})
    public user: User;
}

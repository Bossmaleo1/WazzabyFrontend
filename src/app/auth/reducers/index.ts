import {ActionReducerMap, createReducer, on} from '@ngrx/store';
import {User} from '@wazzabysama/core/model/user.model';
import {AuthActions} from '@wazzabysama/auth/action-types';


export interface AuthState {
    user: User;
}

export const initialAuthState: AuthState = {
    user: undefined
};

export const  authReducer =  createReducer(
    initialAuthState,

    on(AuthActions.login, (state, action) => {
        return {
            user: action.user
        };
    }),

    on(AuthActions.logout, (state, action) => {
        return {
            user: undefined
        };
    })
);

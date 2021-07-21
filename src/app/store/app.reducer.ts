import * as reducers from './reducers';

import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    users: reducers.UserState
}

export const appReducers: ActionReducerMap<AppState> = {
    users: reducers._userReducer
};
  
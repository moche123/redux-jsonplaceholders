import { chargeUsers,chargeUsersFail,chargeUsersSuccess } from './../actions/user.actions';
import { User } from 'src/app/models/user.model';
import { Action,createReducer,on } from "@ngrx/store";


export interface UserState{
    users:User[],
    loading: boolean,
    loaded: boolean,
    error: any
}

export const initialUserState:UserState = {
    users: [],
    loading: false,
    loaded: false,
    error:null
}

const USER_REDUCER = createReducer(
    initialUserState,
    on(chargeUsers, state => ({...state,loading:true})),
    on(chargeUsersSuccess, (state, { users }) =>
        ({ 
            ...state,
            users: [...users],
            loading:false,
            loaded: true 
        })
    ),
    on(chargeUsersFail, (state,{ payload })=> 
        ({
            ...state,
            loading: false,
            loaded: false,
            error: {
                url: payload.url,
                name: payload.name,
                message: payload.message
            }

        })
    )
)

export function _userReducer(state:any,action:Action){
    return USER_REDUCER(state,action);
}


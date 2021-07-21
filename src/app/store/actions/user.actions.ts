import { createAction,props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const chargeUsers = createAction(
    '[User] Charge Users'
)
export const chargeUsersSuccess = createAction(
    '[user] Charge Users Success',
    props<{users: User[]}>()
)

export const chargeUsersFail = createAction(
    '[user] Charge Users Fail',
    props<{payload: any}>()
)


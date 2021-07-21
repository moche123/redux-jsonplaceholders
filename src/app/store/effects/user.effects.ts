import { UserService } from './../../services/user.service';
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as userActions from '../actions/user.actions';
@Injectable(
    // {providedIn: 'root'}
  )
export class UserEffects{
    constructor(
        private action$: Actions,
        private userService: UserService
    ){}

    chargeUsers$ = createEffect(
        ()=> this.action$.pipe(
                ofType(userActions.chargeUsers),
                mergeMap(
                    ()=> this.userService.getUsers()
                    .pipe(
                        map( r => userActions.chargeUsersSuccess({users: r })),
                        catchError( err => of(userActions.chargeUsersFail({payload: err})) )
                    )

                    
                )
            )
        
    )



}
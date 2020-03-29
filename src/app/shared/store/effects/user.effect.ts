import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import * as usersActions from '../actions'
import { switchMap, map, catchError } from 'rxjs/operators';
import {LandingService } from '../../../modules/landing/landing.service'
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()

export class UserEffect {
  constructor(
    private actions$: Actions,
    private landingService: LandingService
  ) {
     
  }
  @Effect()
  loadUsers$: Observable<Action> = this.actions$
    .pipe(
      ofType(usersActions.LOAD_USERS),
      switchMap(() => {
      return this.landingService.getFullData().pipe(
        map(users =>  new usersActions.LoadUsersSuccess(users)),
        catchError(error => of(new usersActions.LoadUsersFail(error)))
      )
    }))
}
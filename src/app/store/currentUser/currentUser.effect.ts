import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';
import {
	loadCurrentUser,
	loadCurrentUserError,
	loadCurrentUserSuccess,
	logoutCurrentUser,
	updateCurrentUser,
	updateCurrentUserError,
	updateCurrentUserSuccess,
} from './currentUser.actions';

@Injectable()
export class CurrentUserEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly userService: UserService
	) {}

	loadCurrentUser$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(loadCurrentUser),
				exhaustMap(({ id }) =>
					this.userService.get(id).pipe(
						map((user) =>
							loadCurrentUserSuccess({
								payload: user,
							})
						)
					)
				),

				catchError((error: HttpErrorResponse) =>
					of(loadCurrentUserError({ error: error.message }))
				)
			);
		}
	});

	updateCurrentUSer$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(updateCurrentUser),
				exhaustMap(({ id, payload }) =>
					this.userService.update(id, payload).pipe(
						map((user) =>
							updateCurrentUserSuccess({
								payload: user,
							})
						),
						catchError((error: HttpErrorResponse) =>
							of(updateCurrentUserError({ error: error.message }))
						)
					)
				)
			);
		}
	});
}

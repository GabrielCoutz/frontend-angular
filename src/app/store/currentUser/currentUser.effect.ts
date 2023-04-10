import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
	map,
	exhaustMap,
	catchError,
	tap,
	ignoreElements,
} from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import {
	deleteCurrentUser,
	deleteCurrentUserError,
	deleteCurrentUserSuccess,
	loadCurrentUser,
	loadCurrentUserError,
	loadCurrentUserSuccess,
	updateCurrentUser,
	updateCurrentUserError,
	updateCurrentUserSuccess,
} from './currentUser.actions';
import { selectCurrentUser } from './currentUser.selectors';

@Injectable()
export class CurrentUserEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly userService: UserService,
		private readonly authService: AuthService,
		private readonly store: Store,
		private readonly router: Router,
		private readonly matDialog: MatDialog
	) {}

	loadCurrentUser$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(loadCurrentUser),
				concatLatestFrom(() => this.store.select(selectCurrentUser)),
				exhaustMap(([{ id }, user]) => {
					if (!user) {
						return this.userService.get(id).pipe(
							map((user) =>
								loadCurrentUserSuccess({
									payload: user,
								})
							)
						);
					}
					return of(
						loadCurrentUserSuccess({
							payload: user,
						})
					);
				}),

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

	deleteCurrentUser$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(deleteCurrentUser),
				exhaustMap(({ id, payload }) =>
					this.authService.signin(payload).pipe(
						exhaustMap(({ token }) => {
							if (token)
								return this.userService
									.delete(id)
									.pipe(map(() => deleteCurrentUserSuccess()));

							return of(
								deleteCurrentUserError({ error: 'Credenciais inválidas' })
							);
						}),
						catchError(() =>
							of(deleteCurrentUserError({ error: 'Credenciais inválidas' }))
						)
					)
				),

				catchError((error: HttpErrorResponse) =>
					of(deleteCurrentUserError({ error: error.message }))
				)
			);
		}
	});

	deleteCurrentUserSuccess$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(deleteCurrentUserSuccess),
				tap(() => {
					localStorage.removeItem('token');
					this.matDialog.closeAll();
					this.router.navigate(['account/signin']);
				}),
				ignoreElements(),
				catchError((error) =>
					of(deleteCurrentUserError({ error: error.message }))
				)
			);
		}
	});
}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';
import { loadUsers, loadUsersError, loadUsersSuccess } from './user.actions';

@Injectable()
export class UsersEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly userService: UserService
	) {}

	loadUsers$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(loadUsers),
				exhaustMap(() =>
					this.userService.getAll().pipe(
						map((users) =>
							loadUsersSuccess({
								payload: users,
							})
						),
						catchError((error) => of(loadUsersError({ error: error.message })))
					)
				)
			);
		}
	});
}

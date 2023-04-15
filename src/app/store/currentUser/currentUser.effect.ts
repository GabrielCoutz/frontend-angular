import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { ProductService } from '../../services/product/product.service';
import { UserService } from '../../services/user/user.service';
import { selectCurrentUser } from './currentUser.selectors';
import * as CurrentUserActions from './currentUser.actions';

import {
	map,
	exhaustMap,
	catchError,
	tap,
	ignoreElements,
} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Injectable()
export class CurrentUserEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly userService: UserService,
		private readonly authService: AuthService,
		private readonly productService: ProductService,
		private readonly store: Store,
		private readonly router: Router,
		private readonly location: Location,
		private readonly matDialog: MatDialog,
		private readonly matSnackbar: MatSnackBar
	) {}

	loadCurrentUser$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(CurrentUserActions.loadCurrentUser),
				concatLatestFrom(() => this.store.select(selectCurrentUser)),
				exhaustMap(([{ id }, user]) => {
					if (!user) {
						return this.userService.get(id).pipe(
							map((user) =>
								CurrentUserActions.loadCurrentUserSuccess({
									payload: user,
								})
							)
						);
					}
					return of(
						CurrentUserActions.loadCurrentUserSuccess({
							payload: user,
						})
					);
				}),

				catchError((error: HttpErrorResponse) =>
					of(CurrentUserActions.loadCurrentUserError({ error: error.message }))
				)
			);
		}
	});

	updateCurrentUser$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(CurrentUserActions.updateCurrentUser),
				exhaustMap(({ id, payload }) =>
					this.userService.update(id, payload).pipe(
						map((user) => {
							this.matSnackbar.open('Dados atualizados', 'ok', {
								horizontalPosition: 'center',
								verticalPosition: 'top',
								panelClass: ['custom-snackbar', 'success'],
							});
							return CurrentUserActions.updateCurrentUserSuccess({
								payload: user,
							});
						}),

						catchError((error: HttpErrorResponse) =>
							of(
								CurrentUserActions.updateCurrentUserError({
									error: error.message,
								})
							)
						)
					)
				)
			);
		}
	});

	deleteCurrentUser$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(CurrentUserActions.deleteCurrentUser),
				exhaustMap(({ id, payload }) =>
					this.authService.signin(payload).pipe(
						exhaustMap(({ token }) => {
							if (token)
								return this.userService
									.delete(id)
									.pipe(
										map(() => CurrentUserActions.deleteCurrentUserSuccess())
									);

							return of(
								CurrentUserActions.deleteCurrentUserError({
									error: 'Credenciais inválidas',
								})
							);
						}),
						catchError(() =>
							of(
								CurrentUserActions.deleteCurrentUserError({
									error: 'Credenciais inválidas',
								})
							)
						)
					)
				),

				catchError((error: HttpErrorResponse) =>
					of(
						CurrentUserActions.deleteCurrentUserError({ error: error.message })
					)
				)
			);
		}
	});

	deleteCurrentUserSuccess$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(CurrentUserActions.deleteCurrentUserSuccess),
				tap(() => {
					localStorage.removeItem('token');
					this.matSnackbar.open('Conta deletada com sucesso!', 'ok', {
						horizontalPosition: 'center',
						verticalPosition: 'top',
						panelClass: ['custom-snackbar', 'success'],
					});
					this.matDialog.closeAll();
					this.router.navigate(['account/signin']);
				}),
				ignoreElements(),
				catchError((error) =>
					of(
						CurrentUserActions.deleteCurrentUserError({ error: error.message })
					)
				)
			);
		}
	});

	logoutCurrentUser$ = createEffect(
		() => {
			{
				return this.actions$.pipe(
					ofType(CurrentUserActions.logoutCurrentUser),
					tap(() => {
						localStorage.removeItem('token');
						this.matDialog.closeAll();
						this.router.navigate(['account/signin']);
					})
				);
			}
		},
		{ dispatch: false }
	);

	createUniqueProduct$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(CurrentUserActions.createUniqueProduct),
				exhaustMap(({ payload }) =>
					this.productService.create(payload).pipe(
						map((product) => {
							this.matSnackbar.open('Produto criado com sucesso', 'ok', {
								horizontalPosition: 'center',
								verticalPosition: 'top',
								panelClass: ['custom-snackbar', 'success'],
							});
							this.location.back();
							return CurrentUserActions.createUniqueProductSuccess({
								payload: product,
							});
						})
					)
				),
				catchError((error: HttpErrorResponse) =>
					of(
						CurrentUserActions.createUniqueProductError({
							error: error.message,
						})
					)
				)
			);
		}
	});

	updateUniqueProduct$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(CurrentUserActions.updateUniqueProduct),
				exhaustMap(({ id, payload }) =>
					this.productService.update(id, payload).pipe(
						map((product) => {
							this.matSnackbar.open('Produto atualizado!', 'ok', {
								horizontalPosition: 'center',
								verticalPosition: 'top',
								panelClass: ['custom-snackbar', 'success'],
							});
							return CurrentUserActions.updateUniqueProductSuccess({
								payload: product,
							});
						})
					)
				),
				catchError((error: HttpErrorResponse) =>
					of(
						CurrentUserActions.updateUniqueProductError({
							error: error.message,
						})
					)
				)
			);
		}
	});

	deleteUniqueProduct$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(CurrentUserActions.deleteUniqueProduct),
				exhaustMap(({ id }) =>
					this.productService.delete(id).pipe(
						map(() => {
							this.matDialog.closeAll();
							this.matSnackbar.open('Produto deletado com sucesso!', 'ok', {
								horizontalPosition: 'center',
								verticalPosition: 'top',
								panelClass: ['custom-snackbar', 'success'],
							});
							return CurrentUserActions.deleteUniqueProductSuccess({ id });
						})
					)
				),
				catchError((error: HttpErrorResponse) =>
					of(
						CurrentUserActions.deleteUniqueProductError({
							error: error.message,
						})
					)
				)
			);
		}
	});
}

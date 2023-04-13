import { createReducer, on } from '@ngrx/store';
import { IUserDefaultResponse } from '../../services/user/interface/user-service.interface';
import * as CurrentUserActions from './currentUser.actions';
import { ICurrentUserState } from './currentUser.state';

export const currentUserInitialState: ICurrentUserState = {
	user: undefined,
	error: null,
	isLoading: false,
};

export const currentUserReducer = createReducer(
	currentUserInitialState,
	on(
		CurrentUserActions.loadCurrentUser,
		(state): ICurrentUserState => ({
			...state,
			isLoading: true,
			error: null,
		})
	),
	on(
		CurrentUserActions.loadCurrentUserSuccess,
		(state, { payload }): ICurrentUserState => ({
			...state,
			isLoading: false,
			error: null,
			user: payload,
		})
	),
	on(
		CurrentUserActions.loadCurrentUserError,
		(state, { error }): ICurrentUserState => ({
			...state,
			isLoading: false,
			error,
			user: undefined,
		})
	),
	on(
		CurrentUserActions.updateCurrentUser,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: true,
		})
	),
	on(
		CurrentUserActions.updateCurrentUserSuccess,
		(state, { payload }): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: false,
			user: payload,
		})
	),
	on(
		CurrentUserActions.updateCurrentUserError,
		(state, { error }): ICurrentUserState => ({
			...state,
			isLoading: false,
			error,
		})
	),
	on(
		CurrentUserActions.deleteCurrentUser,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: true,
		})
	),
	on(
		CurrentUserActions.deleteCurrentUserSuccess,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: false,
			user: undefined,
		})
	),
	on(
		CurrentUserActions.deleteCurrentUserError,
		(state, { error }): ICurrentUserState => ({
			...state,
			error,
			isLoading: false,
		})
	),
	on(
		CurrentUserActions.updateUniqueProduct,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: true,
		})
	),
	on(
		CurrentUserActions.updateUniqueProductSuccess,
		(state, { payload }): ICurrentUserState => {
			const updatedProducts = state.user?.products?.map((product) =>
				product.id === payload.id ? (product = payload) : product
			);

			const updatedUser = {
				...state.user,
				products: updatedProducts,
			} as IUserDefaultResponse;

			return {
				...state,
				error: null,
				isLoading: false,
				user: updatedUser,
			};
		}
	),
	on(
		CurrentUserActions.updateUniqueProductError,
		(state, { error }): ICurrentUserState => ({
			...state,
			error,
			isLoading: false,
		})
	),
	on(
		CurrentUserActions.deleteUniqueProduct,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: true,
		})
	),
	on(
		CurrentUserActions.deleteUniqueProductSuccess,
		(state, { id }): ICurrentUserState => {
			const updatedProducts = state.user?.products.filter(
				(product) => product.id !== id
			);

			const updatedUser = {
				...state.user,
				products: updatedProducts,
			} as IUserDefaultResponse;

			return {
				...state,
				error: null,
				isLoading: false,
				user: updatedUser,
			};
		}
	),
	on(
		CurrentUserActions.deleteUniqueProductError,
		(state, { error }): ICurrentUserState => ({
			...state,
			error,
			isLoading: false,
		})
	),
	on(
		CurrentUserActions.createUniqueProduct,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: true,
		})
	),
	on(
		CurrentUserActions.createUniqueProductSuccess,
		(state, { payload }): ICurrentUserState => {
			const updatedProducts = [...(state.user?.products || [])];

			updatedProducts.push(payload);

			const updatedUser = {
				...state.user,
				products: updatedProducts,
			} as IUserDefaultResponse;

			return {
				...state,
				error: null,
				isLoading: false,
				user: updatedUser,
			};
		}
	),
	on(
		CurrentUserActions.createUniqueProductError,
		(state, { error }): ICurrentUserState => ({
			...state,
			error,
			isLoading: false,
		})
	),
	on(
		CurrentUserActions.logoutCurrentUser,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: false,
			user: undefined,
		})
	)
);

import { createReducer, on } from '@ngrx/store';
import { IUserDefaultResponse } from '../../services/user/interface/user-service.interface';
import {
	deleteCurrentUser,
	deleteCurrentUserError,
	deleteCurrentUserSuccess,
	deleteUniqueProduct,
	deleteUniqueProductError,
	deleteUniqueProductSuccess,
	loadCurrentUser,
	loadCurrentUserError,
	loadCurrentUserSuccess,
	logoutCurrentUser,
	updateCurrentUser,
	updateCurrentUserError,
	updateCurrentUserSuccess,
	updateUniqueProduct,
	updateUniqueProductError,
	updateUniqueProductSuccess,
} from './currentUser.actions';
import { ICurrentUserState } from './currentUser.state';

export const currentUserInitialState: ICurrentUserState = {
	user: undefined,
	error: null,
	isLoading: false,
};

export const currentUserReducer = createReducer(
	currentUserInitialState,
	on(
		loadCurrentUser,
		(state): ICurrentUserState => ({
			...state,
			isLoading: true,
			error: null,
		})
	),
	on(
		loadCurrentUserSuccess,
		(state, { payload }): ICurrentUserState => ({
			...state,
			isLoading: false,
			error: null,
			user: payload,
		})
	),
	on(
		loadCurrentUserError,
		(state, { error }): ICurrentUserState => ({
			...state,
			isLoading: false,
			error,
			user: undefined,
		})
	),
	on(
		updateCurrentUser,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: true,
		})
	),
	on(
		updateCurrentUserSuccess,
		(state, { payload }): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: false,
			user: payload,
		})
	),
	on(
		updateCurrentUserError,
		(state, { error }): ICurrentUserState => ({
			...state,
			isLoading: false,
			error,
		})
	),
	on(
		deleteCurrentUser,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: true,
		})
	),
	on(
		deleteCurrentUserSuccess,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: false,
			user: undefined,
		})
	),
	on(
		deleteCurrentUserError,
		(state, { error }): ICurrentUserState => ({
			...state,
			error,
			isLoading: false,
		})
	),
	on(
		updateUniqueProduct,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: true,
		})
	),
	on(updateUniqueProductSuccess, (state, { payload }): ICurrentUserState => {
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
	}),
	on(
		updateUniqueProductError,
		(state, { error }): ICurrentUserState => ({
			...state,
			error,
			isLoading: false,
		})
	),
	on(
		deleteUniqueProduct,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: true,
		})
	),
	on(deleteUniqueProductSuccess, (state, { id }): ICurrentUserState => {
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
	}),
	on(
		deleteUniqueProductError,
		(state, { error }): ICurrentUserState => ({
			...state,
			error,
			isLoading: false,
		})
	),
	on(
		logoutCurrentUser,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: false,
			user: undefined,
		})
	)
);

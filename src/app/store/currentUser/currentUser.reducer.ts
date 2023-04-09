import { createReducer, on } from '@ngrx/store';
import {
	deleteCurrentUser,
	deleteCurrentUserError,
	deleteCurrentUserSuccess,
	loadCurrentUser,
	loadCurrentUserError,
	loadCurrentUserSuccess,
	logoutCurrentUser,
	updateCurrentUser,
	updateCurrentUserError,
	updateCurrentUserSuccess,
} from './currentUser.actions';
import { ICurrentUserState } from './currentUser.state';

const initialState: ICurrentUserState = {
	user: null,
	error: null,
	isLoading: false,
};

export const currentUserReducer = createReducer(
	initialState,
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
			user: null,
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
			user: null,
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
		logoutCurrentUser,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: false,
			user: null,
		})
	)
);

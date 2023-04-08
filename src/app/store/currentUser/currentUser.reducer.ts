import { createReducer, on } from '@ngrx/store';
import {
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
		logoutCurrentUser,
		(state): ICurrentUserState => ({
			...state,
			error: null,
			isLoading: false,
			user: null,
		})
	)
);

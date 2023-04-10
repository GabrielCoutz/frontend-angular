import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersError, loadUsersSuccess } from './user.actions';
import { IUsersState } from './user.state';

export const initialState: IUsersState = {
	user: [],
	isLoading: false,
	error: null,
};

export const userReducer = createReducer(
	initialState,
	on(
		loadUsers,
		(state: IUsersState): IUsersState => ({
			...state,
			isLoading: true,
			user: [],
			error: null,
		})
	),
	on(
		loadUsersSuccess,
		(state: IUsersState, { payload }): IUsersState => ({
			...state,
			user: payload,
			isLoading: false,
			error: null,
		})
	),
	on(
		loadUsersError,
		(state: IUsersState, { error }): IUsersState => ({
			...state,
			user: [],
			isLoading: false,
			error,
		})
	)
);

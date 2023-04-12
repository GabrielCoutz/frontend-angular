import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { IUsersState } from './user.state';

export const initialState: IUsersState = {
	user: [],
	isLoading: false,
	error: null,
};

export const userReducer = createReducer(
	initialState,
	on(
		UserActions.loadUsers,
		(state: IUsersState): IUsersState => ({
			...state,
			isLoading: true,
			user: [],
			error: null,
		})
	),
	on(
		UserActions.loadUsersSuccess,
		(state: IUsersState, { payload }): IUsersState => ({
			...state,
			user: payload,
			isLoading: false,
			error: null,
		})
	),
	on(
		UserActions.loadUsersError,
		(state: IUsersState, { error }): IUsersState => ({
			...state,
			user: [],
			isLoading: false,
			error,
		})
	)
);

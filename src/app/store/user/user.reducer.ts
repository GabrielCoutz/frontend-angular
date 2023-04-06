import { createReducer, on } from '@ngrx/store';
import { deleteUser, getUser, loadUser, saveUser } from './user.actions';
import { UserState } from './user.state';

export const initialState: UserState = {
	user: undefined,
	isLoading: false,
};

export const userReducer = createReducer(
	initialState,
	on(
		loadUser,
		(state: UserState): UserState => ({ ...state, isLoading: true })
	),
	on(
		saveUser,
		(state: UserState, { payload }): UserState => ({
			...state,
			user: payload.user,
			isLoading: false,
		})
	),
	on(getUser, (state: UserState): UserState => ({ ...state })),
	on(
		deleteUser,
		(state: UserState): UserState => ({ ...state, user: undefined })
	)
);

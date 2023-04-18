import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUsersState } from './users.state';

export const selectIUsersState = createFeatureSelector<IUsersState>('users');

export const selectUserById = (props: { id: string }) =>
	createSelector(selectIUsersState, (state) =>
		state.user.filter((user) => user.id === props.id)
	);

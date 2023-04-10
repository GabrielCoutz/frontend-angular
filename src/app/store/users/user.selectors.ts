import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUsersState } from './user.state';

export const selectIUsersState = createFeatureSelector<IUsersState>('user');

export const selectUserById = (props: { id: string }) =>
	createSelector(selectIUsersState, (state) =>
		state.user.filter((user) => user.id === props.id)
	);

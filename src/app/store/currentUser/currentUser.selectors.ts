import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICurrentUserState } from './currentUser.state';

const selectICurrentUserState =
	createFeatureSelector<ICurrentUserState>('currentUser');

export const selectCurrentUser = createSelector(
	selectICurrentUserState,
	(state) => state.user
);

export const selectCurrentUserName = createSelector(
	selectCurrentUser,
	(user) => user?.name
);

export const selectCurrentUserId = createSelector(
	selectCurrentUser,
	(user) => user?.id
);

export const selectCurrentUserEmail = createSelector(
	selectCurrentUser,
	(user) => user?.email
);

export const selectCurrentUserError = createSelector(
	selectICurrentUserState,
	(state) => state.error
);

export const selectCurrentUserLoading = createSelector(
	selectICurrentUserState,
	(state) => state.isLoading
);

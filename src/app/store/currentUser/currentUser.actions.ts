import { createAction, props } from '@ngrx/store';
import { IUserDefaultResponse } from '../../services/user/interface/user-service.interface';

export const loadCurrentUser = createAction(
	'[CurrentUser] load user',
	props<{ id: string }>()
);
export const loadCurrentUserSuccess = createAction(
	'[CurrentUser] load user success',
	props<{
		payload: IUserDefaultResponse;
	}>()
);
export const loadCurrentUserError = createAction(
	'[CurrentUser] load user error',
	props<{
		error: string;
	}>()
);

export const updateCurrentUser = createAction(
	'[CurrentUser] update user',
	props<{ id: string; payload: Partial<IUserDefaultResponse> }>()
);
export const updateCurrentUserSuccess = createAction(
	'[CurrentUser] update user success',
	props<{
		payload: IUserDefaultResponse;
	}>()
);
export const updateCurrentUserError = createAction(
	'[CurrentUser] update user error',
	props<{
		error: string;
	}>()
);

export const logoutCurrentUser = createAction('[CurrentUser] logout user');

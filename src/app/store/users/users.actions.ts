import { createAction, props } from '@ngrx/store';
import { IUserDefaultResponse } from '../../services/user/interface/user-service.interface';

export const loadUsers = createAction('[Users Data] load users');

export const loadUsersSuccess = createAction(
	'[Users Data] load users success',
	props<{ payload: IUserDefaultResponse[] }>()
);

export const loadUsersError = createAction(
	'[Users Data] load users error',
	props<{ error: string }>()
);

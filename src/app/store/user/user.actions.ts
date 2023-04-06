import { createAction, props } from '@ngrx/store';
import { UserState } from './user.state';

export const getUser = createAction('[User Data] get user');
export const saveUser = createAction(
	'[User Data] save user',
	props<{ payload: UserState }>()
);
export const deleteUser = createAction('[User Data] delete user');
export const loadUser = createAction('[User Data] load user');

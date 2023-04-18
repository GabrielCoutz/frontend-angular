import { createAction, props } from '@ngrx/store';
import {
	IProduct,
	IProductCreatePayload,
	IProductUpdatePayload,
} from '../../services/product/interface/product-service.interface';
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

export const deleteCurrentUser = createAction(
	'[CurrentUser] delete user',
	props<{ id: string; payload: { email: string; password: string } }>()
);
export const deleteCurrentUserSuccess = createAction(
	'[CurrentUser] delete user success'
);
export const deleteCurrentUserError = createAction(
	'[CurrentUser] delete user error',
	props<{
		error: string;
	}>()
);

export const createUniqueProduct = createAction(
	'[Unique Product] create product',
	props<{ payload: IProductCreatePayload }>()
);
export const createUniqueProductSuccess = createAction(
	'[Unique Product] create product success',
	props<{ payload: IProduct }>()
);
export const createUniqueProductError = createAction(
	'[Unique Product] create product error',
	props<{ error: string }>()
);

export const updateUniqueProduct = createAction(
	'[Unique Product] Update product',
	props<{ id: string; payload: IProductUpdatePayload }>()
);
export const updateUniqueProductSuccess = createAction(
	'[Unique Product] Update product success',
	props<{ payload: IProduct }>()
);
export const updateUniqueProductError = createAction(
	'[Unique Product] Update product error',
	props<{ error: string }>()
);

export const deleteUniqueProduct = createAction(
	'[Delete Product] Delete product',
	props<{ id: string }>()
);
export const deleteUniqueProductSuccess = createAction(
	'[Delete Product] Delete product success',
	props<{ id: string }>()
);
export const deleteUniqueProductError = createAction(
	'[Delete Product] Delete product error',
	props<{ error: string }>()
);

export const logoutCurrentUser = createAction('[CurrentUser] logout user');
export const clearCurrentUserError = createAction(
	'[CurrentUser] clear user error'
);

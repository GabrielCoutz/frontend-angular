import { createAction, props } from '@ngrx/store';
import { IProductDefaultResponse } from '../../services/product/interface/product-service.interface';

export const loadProducts = createAction('[Products List] Load products');
export const loadProductsSuccess = createAction(
	'[Products List] Load products success',
	props<{ payload: IProductDefaultResponse[] }>()
);
export const loadProductsError = createAction(
	'[Products List] Load products error',
	props<{ error: string }>()
);

export const getAllProducts = createAction('[Products List] Get all products');

import { createAction, props } from '@ngrx/store';
import { IProductDefaultResponse } from '../../services/product/interface/product-service.interface';

export const loadUniqueProduct = createAction(
	'[Unique Product] Load unique product',
	props<{ id: string }>()
);
export const loadUniqueProductSuccess = createAction(
	'[Unique Product] Load unique product success',
	props<{ payload: IProductDefaultResponse }>()
);
export const loadUniqueProductError = createAction(
	'[Unique Product] Load unique product error',
	props<{ error: string }>()
);

import { createAction, props } from '@ngrx/store';
import { IProdutState } from './product.state';

export const loadProducts = createAction('[Products List] Load products');
export const getAllProducts = createAction('[Products List] Get all products');
export const saveProducts = createAction(
	'[Products List] Save products',
	props<{ payload: IProdutState }>()
);

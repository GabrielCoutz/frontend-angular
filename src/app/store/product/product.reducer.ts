import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { IProductState } from './product.state';

const initialState: IProductState = {
	products: [],
	isLoading: false,
	error: null,
};

export const productsReducer = createReducer(
	initialState,
	on(
		ProductActions.loadProducts,
		(state): IProductState => ({
			...state,
			products: [],
			isLoading: true,
			error: null,
		})
	),
	on(
		ProductActions.loadProductsSuccess,
		(state, { payload }): IProductState => ({
			...state,
			products: payload,
			isLoading: false,
			error: null,
		})
	),
	on(
		ProductActions.loadProductsError,
		(state, { error }): IProductState => ({
			...state,
			products: [],
			isLoading: false,
			error,
		})
	)
);

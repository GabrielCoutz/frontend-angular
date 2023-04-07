import { createReducer, on } from '@ngrx/store';
import {
	loadProducts,
	loadProductsError,
	loadProductsSuccess,
} from './product.actions';
import { IProductState } from './product.state';

const initialState: IProductState = {
	products: [],
	isLoading: false,
	error: null,
};

export const productsReducer = createReducer(
	initialState,
	on(
		loadProducts,
		(state): IProductState => ({
			...state,
			products: [],
			isLoading: true,
			error: null,
		})
	),
	on(
		loadProductsSuccess,
		(state, { payload }): IProductState => ({
			...state,
			products: payload,
			isLoading: false,
			error: null,
		})
	),
	on(
		loadProductsError,
		(state, { error }): IProductState => ({
			...state,
			products: [],
			isLoading: false,
			error,
		})
	)
);

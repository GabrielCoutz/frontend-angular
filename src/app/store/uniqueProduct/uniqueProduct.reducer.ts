import { createReducer, on } from '@ngrx/store';
import {
	loadUniqueProduct,
	loadUniqueProductError,
	loadUniqueProductSuccess,
} from './uniqueProduct.actions';
import { IUniqueProductState } from './uniqueProduct.state';

const initialState: IUniqueProductState = {
	error: null,
	isLoading: false,
	product: null,
};

export const uniqueProductReducer = createReducer(
	initialState,
	on(
		loadUniqueProduct,
		(state): IUniqueProductState => ({
			...state,
			error: null,
			isLoading: true,
			product: null,
		})
	),
	on(
		loadUniqueProductSuccess,
		(state, { payload }): IUniqueProductState => ({
			...state,
			error: null,
			isLoading: false,
			product: payload,
		})
	),
	on(
		loadUniqueProductError,
		(state, { error }): IUniqueProductState => ({
			...state,
			error,
			isLoading: false,
			product: null,
		})
	)
);

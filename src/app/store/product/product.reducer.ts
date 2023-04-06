import { createReducer, on } from '@ngrx/store';
import { loadProducts, saveProducts } from './product.actions';
import { IProdutState } from './product.state';

const initialState: IProdutState = {
	products: [],
	isLoading: false,
};

export const productsReducer = createReducer(
	initialState,
	on(loadProducts, (state): IProdutState => ({ ...state, isLoading: true })),
	on(
		saveProducts,
		(state, { payload }): IProdutState => ({
			...state,
			products: payload.products,
			isLoading: false,
		})
	)
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductState } from './products.state';

export const selectProductState =
	createFeatureSelector<IProductState>('products');

export const selectAllProducts = createSelector(
	selectProductState,
	(state: IProductState) => state.products
);

export const selectProductError = createSelector(
	selectProductState,
	(state: IProductState) => state.error
);

export const selectProductLoading = createSelector(
	selectProductState,
	(state: IProductState) => state.isLoading
);

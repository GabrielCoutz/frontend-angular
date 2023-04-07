import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductState } from './product.state';

export const selectProductState =
	createFeatureSelector<IProductState>('products');

export const selectAllProductsState = createSelector(
	selectProductState,
	(state: IProductState) => state.products
);

export const selectProductErrorState = createSelector(
	selectProductState,
	(state: IProductState) => state.error
);

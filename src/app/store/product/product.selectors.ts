import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProdutState } from './product.state';

const selectProductState = createFeatureSelector<IProdutState>('products');

export const selectAllProductsState = createSelector(
	selectProductState,
	(state: IProdutState) => state.products
);

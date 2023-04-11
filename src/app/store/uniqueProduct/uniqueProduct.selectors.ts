import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUniqueProductState } from './uniqueProduct.state';

export const selectCurrentProductState =
	createFeatureSelector<IUniqueProductState>('uniqueProduct');

export const selectCurrentProduct = createSelector(
	selectCurrentProductState,
	(state: IUniqueProductState) => state.product
);
export const selectCurrentProductLoading = createSelector(
	selectCurrentProductState,
	(state) => state.isLoading
);
export const selectCurrentProductError = createSelector(
	selectCurrentProductState,
	(state) => state.error
);

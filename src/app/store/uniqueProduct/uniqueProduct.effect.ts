import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ProductService } from '../../services/product/product.service';
import * as UniqueProductActions from './uniqueProduct.actions';

@Injectable()
export class UniqueProductsEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly productService: ProductService
	) {}

	loadUniqueProduct$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(UniqueProductActions.loadUniqueProduct),
				exhaustMap(({ id }) =>
					this.productService.get(id).pipe(
						map((product) =>
							UniqueProductActions.loadUniqueProductSuccess({
								payload: product,
							})
						)
					)
				),

				catchError((error) =>
					of(
						UniqueProductActions.loadUniqueProductError({
							error: error.message,
						})
					)
				)
			);
		}
	});
}

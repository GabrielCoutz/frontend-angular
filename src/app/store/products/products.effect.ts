import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ProductService } from '../../services/product/product.service';
import * as ProductActions from './products.actions';

@Injectable()
export class ProductsEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly productService: ProductService
	) {}

	loadProducts$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(ProductActions.loadProducts),
				exhaustMap(() =>
					this.productService.getAll().pipe(
						map((products) =>
							ProductActions.loadProductsSuccess({
								payload: products,
							})
						)
					)
				),

				catchError((error) =>
					of(ProductActions.loadProductsError({ error: error.message }))
				)
			);
		}
	});
}

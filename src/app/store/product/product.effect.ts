import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ProductService } from '../../services/product/product.service';
import {
	loadProducts,
	loadProductsError,
	loadProductsSuccess,
} from './product.actions';

@Injectable()
export class ProductsEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly productService: ProductService
	) {}

	loadProducts$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(loadProducts),
				exhaustMap(() =>
					this.productService.getAll().pipe(
						map((products) =>
							loadProductsSuccess({
								payload: products,
							})
						)
					)
				),

				catchError((error) => of(loadProductsError({ error: error.message })))
			);
		}
	});
}

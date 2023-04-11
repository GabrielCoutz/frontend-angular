import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { ProductService } from '../../services/product/product.service';
import {
	loadUniqueProduct,
	loadUniqueProductError,
	loadUniqueProductSuccess,
} from './uniqueProduct.actions';

@Injectable()
export class UniqueProductsEffects {
	constructor(
		private readonly actions$: Actions,
		private readonly productService: ProductService
	) {}

	loadUniqueProduct$ = createEffect(() => {
		{
			return this.actions$.pipe(
				ofType(loadUniqueProduct),
				exhaustMap(({ id }) =>
					this.productService.get(id).pipe(
						map((product) =>
							loadUniqueProductSuccess({
								payload: product,
							})
						)
					)
				),

				catchError((error) =>
					of(loadUniqueProductError({ error: error.message }))
				)
			);
		}
	});
}

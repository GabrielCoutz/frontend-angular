import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/services/product/product.service';
import {
	loadProducts,
	saveProducts,
} from '../../store/product/product.actions';
import { selectAllProductsState } from '../../store/product/product.selectors';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	constructor(
		private readonly productService: ProductService,
		private readonly store: Store
	) {}

	productsAlreadyLoaded$ = this.store.select(selectAllProductsState);

	ngOnInit() {
		this.store.dispatch(loadProducts());

		this.productsAlreadyLoaded$.subscribe({
			next: (products) => {
				if (products.length) return;

				this.productService.getAll().subscribe({
					next: (products) => {
						this.store.dispatch(
							saveProducts({
								payload: {
									isLoading: false,
									products,
								},
							})
						);
					},
				});
			},
		});
	}
}

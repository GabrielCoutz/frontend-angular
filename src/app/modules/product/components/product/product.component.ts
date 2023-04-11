import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUniqueProduct } from '../../../../store/uniqueProduct/uniqueProduct.actions';
import {
	selectCurrentProduct,
	selectCurrentProductLoading,
} from '../../../../store/uniqueProduct/uniqueProduct.selectors';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
	constructor(
		private readonly store: Store,
		private readonly activatedRoute: ActivatedRoute
	) {}

	productId: string = this.activatedRoute.snapshot.params['id'];
	product$ = this.store.select(selectCurrentProduct);
	loading$ = this.store.select(selectCurrentProductLoading);

	ngOnInit() {
		this.store.dispatch(loadUniqueProduct({ id: this.productId }));
	}
}

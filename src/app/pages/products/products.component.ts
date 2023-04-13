import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../store/products/products.actions';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
	constructor(private readonly store: Store) {}

	ngOnInit() {
		this.store.dispatch(loadProducts());
	}
}

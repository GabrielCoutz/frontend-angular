import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadProducts } from '../../store/product/product.actions';
import { selectAllProducts } from '../../store/product/product.selectors';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	constructor(private readonly store: Store) {}

	productsAlreadyLoaded$ = this.store.select(selectAllProducts);

	ngOnInit() {
		this.store.dispatch(loadProducts());
	}
}

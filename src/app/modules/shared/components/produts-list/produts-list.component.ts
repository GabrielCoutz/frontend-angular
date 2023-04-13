import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
	selectAllProducts,
	selectProductError,
	selectProductLoading,
} from '../../../../store/products/products.selectors';

@Component({
	selector: 'app-produts-list',
	templateUrl: './produts-list.component.html',
	styleUrls: ['./produts-list.component.scss'],
})
export class ProdutsListComponent {
	constructor(private readonly store: Store) {}
	products$ = this.store.select(selectAllProducts);
	error$ = this.store.select(selectProductError);
	loading$ = this.store.select(selectProductLoading);
}

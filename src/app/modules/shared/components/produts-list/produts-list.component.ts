import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllProductsState } from '../../../../store/product/product.selectors';

@Component({
	selector: 'app-produts-list',
	templateUrl: './produts-list.component.html',
	styleUrls: ['./produts-list.component.scss'],
})
export class ProdutsListComponent {
	constructor(private readonly store: Store) {}
	products$ = this.store.select(selectAllProductsState);
}

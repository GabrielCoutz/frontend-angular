import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUserProducts } from '../../../../store/currentUser/currentUser.selectors';

@Component({
	selector: 'app-my-products',
	templateUrl: './my-products.component.html',
	styleUrls: ['./my-products.component.scss'],
})
export class MyProductsComponent {
	constructor(private readonly store: Store) {}

	products$ = this.store.select(selectCurrentUserProducts);
}

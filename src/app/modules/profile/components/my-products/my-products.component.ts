import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IProduct } from '../../../../services/product/interface/product-service.interface';
import { selectCurrentUserProducts } from '../../../../store/currentUser/currentUser.selectors';
import { DeleteProductFormComponent } from '../delete-product-form/delete-product-form.component';

@Component({
	selector: 'app-my-products',
	templateUrl: './my-products.component.html',
	styleUrls: ['./my-products.component.scss'],
})
export class MyProductsComponent {
	constructor(private readonly store: Store, public dialog: MatDialog) {}

	products$ = this.store.select(selectCurrentUserProducts);

	deleteProductConfirmation(product: IProduct) {
		this.dialog.open(DeleteProductFormComponent, {
			width: '500px',
			enterAnimationDuration: 200,
			exitAnimationDuration: 200,
			hasBackdrop: true,
			data: { product },
		});
	}
}

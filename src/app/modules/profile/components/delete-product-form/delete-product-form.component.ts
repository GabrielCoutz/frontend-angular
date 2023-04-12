import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IProductUpdateResponse } from '../../../../services/product/interface/product-service.interface';
import { deleteUniqueProduct } from '../../../../store/currentUser/currentUser.actions';

@Component({
	selector: 'app-delete-product-form',
	templateUrl: './delete-product-form.component.html',
	styleUrls: ['./delete-product-form.component.scss'],
})
export class DeleteProductFormComponent {
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: { product: IProductUpdateResponse },
		private readonly store: Store
	) {}

	deleteProduct() {
		this.store.dispatch(deleteUniqueProduct({ id: this.data.product.id }));
	}
}

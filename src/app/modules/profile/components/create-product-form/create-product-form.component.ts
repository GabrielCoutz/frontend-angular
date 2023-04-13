import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IProductCreatePayload } from '../../../../services/product/interface/product-service.interface';
import { createUniqueProduct } from '../../../../store/currentUser/currentUser.actions';
import {
	selectCurrentUserError,
	selectCurrentUserLoading,
} from '../../../../store/currentUser/currentUser.selectors';

@Component({
	selector: 'app-create-product-form',
	templateUrl: './create-product-form.component.html',
	styleUrls: ['./create-product-form.component.scss'],
})
export class CreateProductFormComponent {
	constructor(
		private readonly formBuilder: FormBuilder,
		private readonly store: Store
	) {}

	createProductForm = this.formBuilder.group({
		name: ['', [Validators.required]],
		price: ['', [Validators.required, Validators.min(0)]],
		description: ['', [Validators.required]],
	});
	error$ = this.store.select(selectCurrentUserError);
	loading$ = this.store.select(selectCurrentUserLoading);

	submit() {
		const createProductDto = {
			name: this.createProductForm.value.name,
			price: Number(this.createProductForm.value.price),
			description: this.createProductForm.value.description,
		} as IProductCreatePayload;

		this.store.dispatch(createUniqueProduct({ payload: createProductDto }));
	}
}

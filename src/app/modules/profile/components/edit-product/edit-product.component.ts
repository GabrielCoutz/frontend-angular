import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateUniqueProduct } from '../../../../store/currentUser/currentUser.actions';
import {
	selectCurrentUserLoading,
	selectCurrentUserUniqueProduct,
} from '../../../../store/currentUser/currentUser.selectors';

@Component({
	selector: 'app-edit-product',
	templateUrl: './edit-product.component.html',
	styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent {
	constructor(
		private readonly activatedRoute: ActivatedRoute,
		private readonly formBuilder: FormBuilder,
		private readonly store: Store
	) {}

	productId = this.activatedRoute.snapshot.params['id'];
	product$ = this.store.select(selectCurrentUserUniqueProduct(this.productId));

	myProductForm = this.formBuilder.group({
		description: ['', []],
		name: ['', [Validators.required]],
		price: ['', [Validators.required, Validators.min(0)]],
	});
	loading$ = this.store.select(selectCurrentUserLoading);

	submit() {
		if (this.myProductForm.invalid) return;

		const productUpdateDto = {
			name: this.myProductForm.value.name as string,
			price: Number(this.myProductForm.value.price),
			description: this.myProductForm.value.description as string,
		};

		this.store.dispatch(
			updateUniqueProduct({
				id: this.productId,
				payload: productUpdateDto,
			})
		);
	}

	ngOnInit() {
		this.product$.subscribe((product) => {
			this.myProductForm.setValue({
				description: product?.description || '',
				name: product?.name || '',
				price: product?.price || '',
			});
		});
	}
}

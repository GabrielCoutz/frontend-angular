import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
	MatDialogModule,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { deleteUniqueProduct } from '../../../../store/currentUser/currentUser.actions';

const productMock = {
	created_at: new Date(),
	id: '123',
	name: 'product name',
	price: '123',
	description: 'product description',
};

import { DeleteProductFormComponent } from './delete-product-form.component';

describe('DeleteProductFormComponent', () => {
	let deleteProductFormComponent: DeleteProductFormComponent;
	let fixture: ComponentFixture<DeleteProductFormComponent>;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatDialogModule],
			declarations: [DeleteProductFormComponent],
			providers: [
				{
					provide: MatDialogRef,
					useValue: {},
				},
				{
					provide: MAT_DIALOG_DATA,
					useValue: {},
				},
				provideMockStore(),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(DeleteProductFormComponent);
		deleteProductFormComponent = fixture.componentInstance;
		store = TestBed.inject(MockStore);

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(deleteProductFormComponent).toBeTruthy();
	});

	it('should dispatch when deleteProduct is called', () => {
		spyOn(store, 'dispatch').and.callThrough();
		const component = new DeleteProductFormComponent(
			{ product: productMock },
			store
		);

		component.deleteProduct();

		expect(store.dispatch).toHaveBeenCalledWith(
			deleteUniqueProduct({
				id: productMock.id,
			})
		);
	});
});

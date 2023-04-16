import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { updateUniqueProduct } from '../../../../store/currentUser/currentUser.actions';
import { ProfileModule } from '../../profile.module';

import { EditProductComponent } from './edit-product.component';

const productMock = {
	description: 'description',
	name: 'product name',
	price: '100',
};

describe('EditProductComponent', () => {
	let editProductComponent: EditProductComponent;
	let fixture: ComponentFixture<EditProductComponent>;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, ProfileModule, BrowserAnimationsModule],
			declarations: [EditProductComponent],
			providers: [provideMockStore()],
		}).compileComponents();

		fixture = TestBed.createComponent(EditProductComponent);
		store = TestBed.inject(MockStore);

		editProductComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(editProductComponent).toBeTruthy();
	});

	describe('On submit', () => {
		it('should dispatch with valid data', () => {
			spyOn(store, 'dispatch').and.callThrough();
			editProductComponent.productId = '123';
			editProductComponent.myProductForm.setValue(productMock);

			editProductComponent.submit();

			expect(store.dispatch).toHaveBeenCalledWith(
				updateUniqueProduct({
					payload: {
						...productMock,
						price: Number(productMock.price),
					},
					id: '123',
				})
			);
		});

		it('should not dispatch with invalid data', () => {
			spyOn(store, 'dispatch').and.callThrough();

			editProductComponent.submit();

			expect(store.dispatch).not.toHaveBeenCalled();
		});
	});
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IProduct } from '../../../../services/product/interface/product-service.interface';

import { MyProductsComponent } from './my-products.component';

describe('MyProductsComponent', () => {
	let myProductsComponent: MyProductsComponent;
	let fixture: ComponentFixture<MyProductsComponent>;
	let store: MockStore;
	let matDialog: MatDialog;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatDialogModule, RouterTestingModule],
			declarations: [MyProductsComponent],
			providers: [provideMockStore()],
		}).compileComponents();

		fixture = TestBed.createComponent(MyProductsComponent);
		myProductsComponent = fixture.componentInstance;
		store = TestBed.inject(MockStore);
		matDialog = TestBed.inject(MatDialog);

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(myProductsComponent).toBeTruthy();
	});

	it('should open dialog when delete deleteProductConfirmation is called', () => {
		spyOn(matDialog, 'open').and.callThrough();

		myProductsComponent.deleteProductConfirmation({} as IProduct);

		expect(matDialog.open).toHaveBeenCalled();
	});
});

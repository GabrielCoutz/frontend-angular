import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
	MatDialogModule,
	MatDialogRef,
	MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

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
});

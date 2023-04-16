import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { MyProductsComponent } from './my-products.component';

describe('MyProductsComponent', () => {
	let myProductsComponent: MyProductsComponent;
	let fixture: ComponentFixture<MyProductsComponent>;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatDialogModule, RouterTestingModule],
			declarations: [MyProductsComponent],
			providers: [provideMockStore()],
		}).compileComponents();

		fixture = TestBed.createComponent(MyProductsComponent);
		myProductsComponent = fixture.componentInstance;
		store = TestBed.inject(MockStore);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(myProductsComponent).toBeTruthy();
	});
});

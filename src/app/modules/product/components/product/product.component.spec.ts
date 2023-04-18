import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
	let productComponent: ProductComponent;
	let fixture: ComponentFixture<ProductComponent>;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [ProductComponent],
			providers: [provideMockStore()],
		}).compileComponents();

		fixture = TestBed.createComponent(ProductComponent);
		store = TestBed.inject(MockStore);

		productComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(productComponent).toBeTruthy();
	});
});

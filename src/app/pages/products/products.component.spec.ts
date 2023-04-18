import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '../../modules/shared/shared.module';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
	let productsComponent: ProductsComponent;
	let fixture: ComponentFixture<ProductsComponent>;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SharedModule],
			declarations: [ProductsComponent],
			providers: [provideMockStore()],
		}).compileComponents();

		fixture = TestBed.createComponent(ProductsComponent);
		productsComponent = fixture.componentInstance;
		store = TestBed.inject(MockStore);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(productsComponent).toBeTruthy();
	});
});

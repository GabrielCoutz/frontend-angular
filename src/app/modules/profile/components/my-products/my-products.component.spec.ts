import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductsComponent } from './my-products.component';

describe('MyProductsComponent', () => {
	let component: MyProductsComponent;
	let fixture: ComponentFixture<MyProductsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MyProductsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(MyProductsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

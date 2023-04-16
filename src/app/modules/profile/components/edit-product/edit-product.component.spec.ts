import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProfileModule } from '../../profile.module';

import { EditProductComponent } from './edit-product.component';

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
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { SharedModule } from '../../../shared/shared.module';

import { CreateProductFormComponent } from './create-product-form.component';

describe('CreateProductFormComponent', () => {
	let createProductFormComponent: CreateProductFormComponent;
	let fixture: ComponentFixture<CreateProductFormComponent>;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				SharedModule,
				MatFormFieldModule,
				MatInputModule,
				MatIconModule,
				FormsModule,
				ReactiveFormsModule,
				MatTooltipModule,
				BrowserAnimationsModule,
			],
			declarations: [CreateProductFormComponent],
			providers: [provideMockStore()],
		}).compileComponents();

		fixture = TestBed.createComponent(CreateProductFormComponent);
		store = TestBed.inject(MockStore);
		createProductFormComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(createProductFormComponent).toBeTruthy();
	});
});

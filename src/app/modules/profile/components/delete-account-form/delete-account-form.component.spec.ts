import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccountFormComponent } from './delete-account-form.component';

import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('DeleteAccountFormComponent', () => {
	let component: DeleteAccountFormComponent;
	let fixture: ComponentFixture<DeleteAccountFormComponent>;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DeleteAccountFormComponent],
			providers: [provideMockStore({})],
		}).compileComponents();

		fixture = TestBed.createComponent(DeleteAccountFormComponent);
		store = TestBed.inject(MockStore);

		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

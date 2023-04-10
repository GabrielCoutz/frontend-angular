import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutsListComponent } from './produts-list.component';

import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('ProdutsListComponent', () => {
	let component: ProdutsListComponent;
	let fixture: ComponentFixture<ProdutsListComponent>;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProdutsListComponent],
			providers: [provideMockStore({})],
		}).compileComponents();

		fixture = TestBed.createComponent(ProdutsListComponent);
		store = TestBed.inject(MockStore);

		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

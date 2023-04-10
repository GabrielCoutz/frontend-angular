import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroComponent } from '../../modules/home/components/intro/intro.component';
import { SharedModule } from '../../modules/shared/shared.module';

import { HomeComponent } from './home.component';

import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('HomeComponent', () => {
	let homeComponent: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeComponent, IntroComponent],
			imports: [SharedModule],
			providers: [provideMockStore({})],
		}).compileComponents();
		fixture = TestBed.createComponent(HomeComponent);
		store = TestBed.inject(MockStore);

		homeComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(homeComponent).toBeTruthy();
	});

	describe('On init', () => {
		it('should dispatch loadProducts', () => {
			spyOn(store, 'dispatch').and.callThrough();

			homeComponent.ngOnInit();

			expect(store.dispatch).toHaveBeenCalled();
		});
	});
});

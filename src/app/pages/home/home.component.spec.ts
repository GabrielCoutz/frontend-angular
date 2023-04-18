import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroComponent } from '../../modules/home/components/intro/intro.component';
import { SharedModule } from '../../modules/shared/shared.module';

import { HomeComponent } from './home.component';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
	let homeComponent: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HomeComponent, IntroComponent],
			imports: [SharedModule, RouterTestingModule],
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
});

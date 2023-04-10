import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileModule } from '../../modules/profile/profile.module';

import { ProfileComponent } from './profile.component';

import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('ProfileComponent', () => {
	let profileComponent: ProfileComponent;
	let fixture: ComponentFixture<ProfileComponent>;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProfileComponent],
			imports: [ProfileModule, RouterTestingModule, BrowserAnimationsModule],
			providers: [provideMockStore({})],
		}).compileComponents();

		fixture = TestBed.createComponent(ProfileComponent);

		store = TestBed.inject(MockStore);

		profileComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(profileComponent).toBeTruthy();
	});

	describe('On init', () => {
		it('should dispatch loadCurrentUser', () => {
			spyOn(store, 'dispatch').and.callThrough();

			profileComponent.ngOnInit();

			expect(store.dispatch).toHaveBeenCalled();
		});
	});
});

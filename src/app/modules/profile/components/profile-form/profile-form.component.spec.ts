import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from '../../../auth/auth.module';
import { ProfileModule } from '../../profile.module';

import { ProfileFormComponent } from './profile-form.component';

import { profileFormMock } from './profile-form.mock';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {
	logoutCurrentUser,
	updateCurrentUser,
} from '../../../../store/currentUser/currentUser.actions';
import { userInitialStateMock } from '../../../../store/currentUser/currentUser.selectors.spec';
import { IUsersState } from '../../../../store/users/users.state';
import {
	selectCurrentUser,
	selectCurrentUserError,
} from '../../../../store/currentUser/currentUser.selectors';

describe('ProfileFormComponent', () => {
	let fixture: ComponentFixture<ProfileFormComponent>;
	let profileFormComponent: ProfileFormComponent;
	let store: MockStore<IUsersState>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProfileFormComponent],
			imports: [AuthModule, BrowserAnimationsModule, ProfileModule],
			providers: [
				provideMockStore({
					initialState: userInitialStateMock,
				}),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(ProfileFormComponent);
		store = TestBed.inject(MockStore);

		profileFormComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	afterEach(() => {
		fixture.destroy();
	});

	it('should create', () => {
		expect(profileFormComponent).toBeTruthy();
	});

	describe('Submit form', () => {
		it('should dispatch updateCurrentUser with valid data from form', () => {
			spyOn(store, 'dispatch').and.callThrough();
			selectCurrentUser.setResult(userInitialStateMock.user);

			profileFormComponent.profileForm.setValue(profileFormMock);
			profileFormComponent.submit();

			expect(store.dispatch).toHaveBeenCalledWith(
				updateCurrentUser({
					id: '123',
					payload: {
						email: profileFormMock.email,
						name: profileFormMock.name,
					},
				})
			);
		});

		it('should not dispatch with invalid data from form', () => {
			spyOn(store, 'dispatch').and.callThrough();

			profileFormComponent.profileForm.setValue({
				...profileFormMock,
				email: 'userexample.com',
			});
			profileFormComponent.submit();

			expect(store.dispatch).not.toHaveBeenCalled();
		});

		it('should return an error from user store', () => {
			spyOn(store, 'dispatch').and.callThrough();
			store.setState({ error: 'Any error', isLoading: false, user: [] });
			selectCurrentUser.setResult(userInitialStateMock.user);

			profileFormComponent.profileForm.setValue(profileFormMock);
			profileFormComponent.submit();
			const result = selectCurrentUserError.projector({
				error: 'Any error',
				isLoading: false,
				user: undefined,
			});

			expect(store.dispatch).toHaveBeenCalled();
			expect(result).toBe('Any error');
		});
	});

	describe('Logout', () => {
		it('should dispatch logoutCurrentUser', () => {
			spyOn(store, 'dispatch').and.callThrough();

			profileFormComponent.logout();

			expect(store.dispatch).toHaveBeenCalledWith(logoutCurrentUser());
		});
	});
});

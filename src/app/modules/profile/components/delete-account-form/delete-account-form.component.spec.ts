import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccountFormComponent } from './delete-account-form.component';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { deleteCurrentUser } from '../../../../store/currentUser/currentUser.actions';
import { userInitialStateMock } from '../../../../store/currentUser/currentUser.selectors.spec';
import {
	selectCurrentUser,
	selectCurrentUserError,
} from '../../../../store/currentUser/currentUser.selectors';

describe('DeleteAccountFormComponent', () => {
	let deleteAccountFormComponent: DeleteAccountFormComponent;
	let fixture: ComponentFixture<DeleteAccountFormComponent>;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DeleteAccountFormComponent],
			imports: [
				MatFormFieldModule,
				MatInputModule,
				MatIconModule,
				ReactiveFormsModule,
				MatTooltipModule,
				BrowserAnimationsModule,
			],
			providers: [
				provideMockStore({
					initialState: userInitialStateMock,
				}),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(DeleteAccountFormComponent);
		store = TestBed.inject(MockStore);

		deleteAccountFormComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(deleteAccountFormComponent).toBeTruthy();
	});

	describe('Submit form', () => {
		it('should dispatch deleteCurrentUser with valid password', () => {
			spyOn(store, 'dispatch').and.callThrough();
			selectCurrentUser.setResult(userInitialStateMock.user);

			deleteAccountFormComponent.deleteAccountForm.setValue({
				password: '123',
			});
			deleteAccountFormComponent.submit();

			expect(store.dispatch).toHaveBeenCalledWith(
				deleteCurrentUser({
					id: '123',
					payload: {
						email: userInitialStateMock.user?.email as string,
						password: '123',
					},
				})
			);
		});

		it('should not dispatch with empty form', () => {
			spyOn(store, 'dispatch').and.callThrough();

			deleteAccountFormComponent.deleteAccountForm.setValue({
				password: '',
			});
			deleteAccountFormComponent.submit();

			expect(store.dispatch).not.toHaveBeenCalled();
		});

		it('should return an error with invalid password', () => {
			spyOn(store, 'dispatch').and.callThrough();
			store.setState({ error: 'Any error', isLoading: false, user: [] });
			selectCurrentUser.setResult(userInitialStateMock.user);

			deleteAccountFormComponent.deleteAccountForm.setValue({
				password: '123',
			});
			deleteAccountFormComponent.submit();
			const result = selectCurrentUserError.projector({
				error: 'Any error',
				isLoading: false,
				user: undefined,
			});

			expect(store.dispatch).toHaveBeenCalled();
			expect(result).toEqual('Any error');
		});
	});
});

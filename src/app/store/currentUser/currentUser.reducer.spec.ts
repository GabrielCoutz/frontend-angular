import {
	currentUserInitialState,
	currentUserReducer,
} from './currentUser.reducer';
import * as actions from './currentUser.actions';

const userMock = {
	created_at: 'dd/mm/yyyy',
	email: 'user@example.com',
	id: '123',
	name: 'user',
	products: [],
};

const newUserMock = {
	created_at: 'dd/mm/yyyy',
	email: 'updated.user@example.com',
	id: '123',
	name: 'user updated',
	products: [],
};

const userErrorMock = 'cannot complete this action';

describe('CurrentUser reducer', () => {
	describe('Load', () => {
		it('should load', () => {
			const state = currentUserReducer(
				currentUserInitialState,
				actions.loadCurrentUser
			);

			expect(state).toEqual({ ...currentUserInitialState, isLoading: true });
		});

		it('should load with success and return user data', () => {
			const state = currentUserReducer(
				currentUserInitialState,
				actions.loadCurrentUserSuccess({ payload: userMock })
			);

			expect(state).toEqual({
				...currentUserInitialState,
				isLoading: false,
				user: userMock,
			});
		});

		it('should not load user and return error', () => {
			const state = currentUserReducer(
				currentUserInitialState,
				actions.loadCurrentUserError({ error: userErrorMock })
			);

			expect(state).toEqual({
				...currentUserInitialState,
				error: userErrorMock,
			});
		});
	});

	describe('Update', () => {
		it('should update', () => {
			const state = currentUserReducer(
				currentUserInitialState,
				actions.updateCurrentUser({ id: '123', payload: userMock })
			);

			expect(state).toEqual({ ...currentUserInitialState, isLoading: true });
		});

		it('should update with success and return user data', () => {
			const state = currentUserReducer(
				currentUserInitialState,
				actions.updateCurrentUserSuccess({ payload: newUserMock })
			);

			expect(state).toEqual({ ...currentUserInitialState, user: newUserMock });
		});

		it('should not update and return error', () => {
			const state = currentUserReducer(
				currentUserInitialState,
				actions.updateCurrentUserError({ error: userErrorMock })
			);

			expect(state).toEqual({
				...currentUserInitialState,
				error: userErrorMock,
			});
		});
	});

	describe('Delete', () => {
		it('should delete', () => {
			const state = currentUserReducer(
				currentUserInitialState,
				actions.deleteCurrentUser
			);

			expect(state).toEqual({ ...currentUserInitialState, isLoading: true });
		});

		it('should delete with success', () => {
			const state = currentUserReducer(
				currentUserInitialState,
				actions.deleteCurrentUserSuccess
			);

			expect(state).toEqual(currentUserInitialState);
		});

		it('should not delete and return error', () => {
			const state = currentUserReducer(
				currentUserInitialState,
				actions.deleteCurrentUserError({ error: userErrorMock })
			);

			expect(state).toEqual({
				...currentUserInitialState,
				error: userErrorMock,
			});
		});
	});

	describe('Logout', () => {
		it('should logout', () => {
			const state = currentUserReducer(
				currentUserInitialState,
				actions.logoutCurrentUser
			);

			expect(state).toEqual(currentUserInitialState);
		});
	});
});

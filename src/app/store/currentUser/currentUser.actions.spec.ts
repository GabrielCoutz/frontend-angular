import * as actions from './currentUser.actions';

const userMock = {
	created_at: 'dd/mm/yyyy',
	email: 'user@example.com',
	id: '123',
	name: 'user',
	products: [],
};
const userErrorMock = 'any error';

describe('CurrentUser actions', () => {
	describe('Load', () => {
		it('should create', () => {
			const result = actions.loadCurrentUser({ id: userMock.id });

			expect(result.id).toEqual(userMock.id);
			expect(result.type).toEqual('[CurrentUser] load user');
		});

		it('should load with success and receive user data', () => {
			const result = actions.loadCurrentUserSuccess({ payload: userMock });

			expect(result.payload).toEqual(userMock);
			expect(result.type).toEqual('[CurrentUser] load user success');
		});

		it('should receive error', () => {
			const result = actions.loadCurrentUserError({ error: userErrorMock });

			expect(result.error).toEqual(userErrorMock);
			expect(result.type).toEqual('[CurrentUser] load user error');
		});
	});

	describe('Update', () => {
		it('should update', () => {
			const result = actions.updateCurrentUser({
				id: userMock.id,
				payload: userMock,
			});

			expect(result.id).toEqual(userMock.id);
			expect(result.payload).toEqual(userMock);
			expect(result.type).toEqual('[CurrentUser] update user');
		});

		it('should update with success and return user data', () => {
			const result = actions.updateCurrentUserSuccess({ payload: userMock });

			expect(result.payload).toEqual(userMock);
			expect(result.type).toEqual('[CurrentUser] update user success');
		});

		it('should receive error', () => {
			const result = actions.updateCurrentUserError({ error: userErrorMock });

			expect(result.error).toEqual(userErrorMock);
			expect(result.type).toEqual('[CurrentUser] update user error');
		});
	});

	describe('Delete', () => {
		it('should delete', () => {
			const result = actions.deleteCurrentUser({
				id: userMock.id,
				payload: {
					email: userMock.email,
					password: 'password',
				},
			});

			expect(result.id).toEqual(userMock.id);
			expect(result.payload).toEqual({
				email: userMock.email,
				password: 'password',
			});
			expect(result.type).toEqual('[CurrentUser] delete user');
		});

		it('should delete with success', () => {
			const result = actions.deleteCurrentUserSuccess();

			expect(result.type).toEqual('[CurrentUser] delete user success');
		});

		it('should not delete and receive error', () => {
			const result = actions.deleteCurrentUserError({ error: userErrorMock });

			expect(result.error).toEqual(userErrorMock);
			expect(result.type).toEqual('[CurrentUser] delete user error');
		});
	});

	describe('Logout', () => {
		it('should logout', () => {
			const result = actions.logoutCurrentUser();

			expect(result.type).toEqual('[CurrentUser] logout user');
		});
	});
});

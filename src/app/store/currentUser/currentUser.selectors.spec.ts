import * as selectors from './currentUser.selectors';
import { ICurrentUserState } from './currentUser.state';

export const userInitialStateMock: ICurrentUserState = {
	user: {
		created_at: 'dd/mm/yyyy',
		email: 'user@example.com',
		id: '123',
		name: 'John',
		products: [],
	},
	isLoading: false,
	error: null,
};

describe('CurrentUser Selectors', () => {
	it('should select', () => {
		const result = selectors.selectCurrentUser.projector(userInitialStateMock);

		expect(result).toEqual(userInitialStateMock.user);
	});

	it('should select email', () => {
		const result = selectors.selectCurrentUserEmail.projector(
			userInitialStateMock.user
		);

		expect(result).toEqual(userInitialStateMock.user?.email);
	});

	it('should select id', () => {
		const result = selectors.selectCurrentUserId.projector(
			userInitialStateMock.user
		);

		expect(result).toEqual(userInitialStateMock.user?.id);
	});

	it('should select loading state', () => {
		const result =
			selectors.selectCurrentUserLoading.projector(userInitialStateMock);

		expect(result).toEqual(userInitialStateMock.isLoading);
	});

	it('should select error state', () => {
		const result =
			selectors.selectCurrentUserError.projector(userInitialStateMock);

		expect(result).toEqual(userInitialStateMock.error);
	});

	it('should select name', () => {
		const result = selectors.selectCurrentUserName.projector(
			userInitialStateMock.user
		);

		expect(result).toEqual(userInitialStateMock.user?.name);
	});
});

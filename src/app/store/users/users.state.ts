import { IUserDefaultResponse } from '../../services/user/interface/user-service.interface';

export interface IUsersState {
	user: IUserDefaultResponse[];
	isLoading: boolean;
	error: string | null;
}

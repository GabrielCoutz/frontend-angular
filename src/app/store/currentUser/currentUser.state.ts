import { IUserDefaultResponse } from '../../services/user/interface/user-service.interface';

export interface ICurrentUserState {
	user: IUserDefaultResponse | null;
	isLoading: boolean;
	error: string | null;
}

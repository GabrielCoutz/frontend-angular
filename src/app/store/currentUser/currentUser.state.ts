import { IUserDefaultResponse } from '../../services/user/interface/user-service.interface';

export interface ICurrentUserState {
	user: IUserDefaultResponse | undefined;
	isLoading: boolean;
	error: string | null;
}

import { IUserDefaultResponse } from '../../services/user/interface/user-service.interface';

export interface UserState {
	user: IUserDefaultResponse | undefined;
	isLoading: boolean;
}

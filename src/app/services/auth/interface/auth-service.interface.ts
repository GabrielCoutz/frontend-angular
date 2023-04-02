export interface IAuthService {
	token: string;
}

export interface IAuthServiceError {
	statusCode: number;
	message: string;
}

export interface ISigninPayload {
	email: string;
	password: string;
}

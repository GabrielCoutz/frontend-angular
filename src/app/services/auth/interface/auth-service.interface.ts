export interface IAuthService {
	token: string;
	id: string;
}

export interface IAuthServiceError {
	statusCode: number;
	message: string;
}

export interface ISigninPayload {
	email: string;
	password: string;
}

export interface IValidateRespose {
	id: string;
}

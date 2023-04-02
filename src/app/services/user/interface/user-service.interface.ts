export interface IUserCreatePayload {
	name: string;
	email: string;
	password: string;
}

export interface IUserCreateResponse {
	id: string;
}

export interface IUserCreateError {
	statusCode: number;
	message: string;
}

import { IProduct } from '../../product/interface/product-service.interface';

export interface IUser {
	id: string;
	name: string;
	email: string;
	created_at: string;
}

export interface IUserCreatePayload {
	name: string;
	email: string;
	password: string;
}
export interface IUserCreateResponse {
	id: string;
}

export type IUserUpdatePayload = Partial<IUserCreatePayload>;

export interface IUserCreateError {
	statusCode: number;
	message: string;
}

export interface IUserDefaultResponse extends IUser {
	id: string;
	name: string;
	email: string;
	created_at: string;
	products: IProduct[];
}

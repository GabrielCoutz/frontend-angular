export interface IProductDefaultResponse {
	id: string;
	name: string;
	price: string;
	created_at: Date;
	description?: string;
	user: {
		id: string;
		name: string;
	};
}

export interface IProductCreatePayload {
	name: string;
	price: number;
	description?: string;
}

export type IProductUpdatePayload = Partial<IProductCreatePayload>;

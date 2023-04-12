export interface IProduct {
	id: string;
	name: string;
	price: string;
	created_at: Date;
	description?: string;
}

export interface IProductDefaultResponse extends IProduct {
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

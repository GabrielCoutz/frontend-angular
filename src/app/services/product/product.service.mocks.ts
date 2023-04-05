export const productCreatePayload = {
	name: 'product name',
	price: 1000,
	description: 'product description',
};

export const productExpectPayload = {
	id: '123',
	name: 'product name response',
	price: '1000',
	created_at: new Date(),
	description: 'product description response',
	user: {
		id: '456',
		name: 'user name',
	},
};

export const productUpdatePayload = {
	id: '123',
	name: 'updated product name response',
	price: '2000',
	created_at: new Date(),
	description: 'updated product description response',
	user: {
		id: '456',
		name: 'user name',
	},
};

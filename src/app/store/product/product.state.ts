import { IProductDefaultResponse } from '../../services/product/interface/product-service.interface';

export type IProductState = {
	products: IProductDefaultResponse[];
	isLoading: boolean;
	error: string | null;
};

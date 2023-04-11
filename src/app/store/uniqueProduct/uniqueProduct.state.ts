import { IProductDefaultResponse } from '../../services/product/interface/product-service.interface';

export type IUniqueProductState = {
	product: IProductDefaultResponse | null;
	isLoading: boolean;
	error: string | null;
};

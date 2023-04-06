import { IProductDefaultResponse } from '../../services/product/interface/product-service.interface';

export type IProdutState = {
	products: IProductDefaultResponse[];
	isLoading: boolean;
};

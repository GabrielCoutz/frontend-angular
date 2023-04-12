import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
	IProductCreatePayload,
	IProductDefaultResponse,
	IProductUpdatePayload,
	IProductUpdateResponse,
} from './interface/product-service.interface';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	constructor(private readonly request: HttpClient) {}
	private readonly apiUrl = 'http://localhost:3000/products';

	getAll(): Observable<IProductDefaultResponse[]> {
		return this.request.get<IProductDefaultResponse[]>(this.apiUrl);
	}

	get(id: string): Observable<IProductDefaultResponse> {
		return this.request.get<IProductDefaultResponse>(`${this.apiUrl}/${id}`);
	}

	create(product: IProductCreatePayload): Observable<IProductDefaultResponse> {
		const token = localStorage.getItem('token');

		return this.request.post<IProductDefaultResponse>(this.apiUrl, product, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	update(
		id: string,
		product: IProductUpdatePayload
	): Observable<IProductUpdateResponse> {
		const token = localStorage.getItem('token');

		return this.request.patch<IProductUpdateResponse>(
			`${this.apiUrl}/${id}`,
			product,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	}

	delete(id: string): Observable<object> {
		const token = localStorage.getItem('token');

		return this.request.delete<IProductDefaultResponse>(
			`${this.apiUrl}/${id}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	}
}

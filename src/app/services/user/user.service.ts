import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
	IUserCreatePayload,
	IUserCreateResponse,
	IUserDefaultResponse,
	IUserUpdatePayload,
} from './interface/user-service.interface';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private readonly request: HttpClient) {}
	private readonly apiUrl = 'http://localhost:3000';

	create(payload: IUserCreatePayload): Observable<IUserCreateResponse> {
		return this.request.post<IUserCreateResponse>(
			`${this.apiUrl}/users`,
			payload
		);
	}

	get(id: string): Observable<IUserDefaultResponse> {
		return this.request.get<IUserDefaultResponse>(`${this.apiUrl}/users/${id}`);
	}

	update(
		id: string,
		payload: IUserUpdatePayload
	): Observable<IUserDefaultResponse> {
		const token = localStorage.getItem('token');

		return this.request.patch<IUserDefaultResponse>(
			`${this.apiUrl}/users/${id}`,
			payload,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	}

	delete(id: string): Observable<object> {
		const token = localStorage.getItem('token');

		return this.request.delete(`${this.apiUrl}/users/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	getAll(): Observable<IUserDefaultResponse[]> {
		return this.request.get<IUserDefaultResponse[]>(`${this.apiUrl}/users`);
	}
}

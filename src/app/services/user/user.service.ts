import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroments } from '../../enviroments/enviroments.dev';
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

	create(payload: IUserCreatePayload): Observable<IUserCreateResponse> {
		return this.request.post<IUserCreateResponse>(
			enviroments.USER_ENDPOINT,
			payload
		);
	}

	get(id: string): Observable<IUserDefaultResponse> {
		return this.request.get<IUserDefaultResponse>(
			`${enviroments.USER_ENDPOINT}/${id}`
		);
	}

	update(
		id: string,
		payload: IUserUpdatePayload
	): Observable<IUserDefaultResponse> {
		const token = localStorage.getItem('token');

		return this.request.patch<IUserDefaultResponse>(
			`${enviroments.USER_ENDPOINT}/${id}`,
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

		return this.request.delete(`${enviroments.USER_ENDPOINT}/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}

	getAll(): Observable<IUserDefaultResponse[]> {
		return this.request.get<IUserDefaultResponse[]>(enviroments.USER_ENDPOINT);
	}
}

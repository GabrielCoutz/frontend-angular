import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
	IUserCreatePayload,
	IUserCreateResponse,
	IUserDefaultResponse,
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
		payload: IUserCreatePayload
	): Observable<IUserDefaultResponse> {
		return this.request.put<IUserDefaultResponse>(
			`${this.apiUrl}/users/${id}`,
			payload
		);
	}

	delete(id: string): Observable<IUserDefaultResponse> {
		return this.request.delete<IUserDefaultResponse>(
			`${this.apiUrl}/users/${id}`
		);
	}

	getAll(): Observable<IUserDefaultResponse[]> {
		return this.request.get<IUserDefaultResponse[]>(`${this.apiUrl}/users`);
	}
}

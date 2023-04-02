import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
	IUserCreatePayload,
	IUserCreateResponse,
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
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
	IAuthService,
	ISigninPayload,
	IValidateRespose,
} from './interface/auth-service.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly request: HttpClient) {}
	private readonly apiUrl = 'http://localhost:3000/auth';

	signin(payload: ISigninPayload): Observable<IAuthService> {
		return this.request.post<IAuthService>(`${this.apiUrl}/login`, payload);
	}

	validate(token: string): Observable<IValidateRespose> {
		return this.request.get<IValidateRespose>(`${this.apiUrl}/validate`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	}
}

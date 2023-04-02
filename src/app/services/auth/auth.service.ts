import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
	IAuthService,
	ISigninPayload,
} from './interface/auth-service.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly request: HttpClient) {}
	private readonly apiUrl = 'http://localhost:3000';

	signin(payload: ISigninPayload): Observable<IAuthService> {
		return this.request.post<IAuthService>(`${this.apiUrl}/login`, payload);
	}
}

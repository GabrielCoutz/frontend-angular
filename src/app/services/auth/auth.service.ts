import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { enviroments } from '../../enviroments/enviroments.dev';
import { loadCurrentUser } from '../../store/currentUser/currentUser.actions';
import {
	IAuthService,
	ISigninPayload,
	IValidateRespose,
} from './interface/auth-service.interface';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(
		private readonly request: HttpClient,
		private readonly store: Store
	) {}

	signin(payload: ISigninPayload): Observable<IAuthService> {
		return this.request.post<IAuthService>(
			enviroments.AUTH_ENDPOINTS.SIGNIN,
			payload
		);
	}

	validate(token: string): Observable<IValidateRespose> {
		return this.request.get<IValidateRespose>(
			enviroments.AUTH_ENDPOINTS.VALIDATE,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
	}

	autoLogin() {
		const token = localStorage.getItem('token');
		if (!token) return;

		this.validate(token).subscribe({
			next: ({ id }) => this.store.dispatch(loadCurrentUser({ id })),
		});
	}
}

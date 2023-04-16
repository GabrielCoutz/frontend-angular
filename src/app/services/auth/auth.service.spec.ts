import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import {
	authUserPayload,
	authUserResponse,
	authUserTokenExpect,
	authUserTokenPayload,
} from './auth.service.mocks';

import { throwError } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('AuthService', () => {
	let httpTestingController: HttpTestingController;
	let httpClient: HttpClient;
	let authService: AuthService;
	let store: MockStore;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [provideMockStore()],
		});

		httpTestingController = TestBed.inject(HttpTestingController);
		httpClient = TestBed.inject(HttpClient);
		authService = TestBed.inject(AuthService);
		store = TestBed.inject(MockStore);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(authService).toBeTruthy();
	});

	describe('Signin user', () => {
		it('should signin', () => {
			authService.signin(authUserPayload).subscribe({
				next: (response) => expect(response).toEqual(authUserResponse),
				complete: () => expect(true).toBeTruthy(),
			});

			const req = httpTestingController.expectOne(
				'http://localhost:3000/auth/login'
			);
			expect(req.request.method).toEqual('POST');
			req.flush(authUserResponse);
		});

		it('should return an error with invalid credentials', () => {
			spyOn(authService, 'signin').and.returnValue(
				throwError(() => new Error('Invalid credentials'))
			);

			authService.signin(authUserPayload).subscribe({
				error: (erro) => expect(erro.message).toEqual('Invalid credentials'),
			});
		});
	});

	describe('Validate credentials', () => {
		it('should validate and return id from bearer token', (done) => {
			authService.validate(authUserTokenPayload).subscribe({
				next: (response) => expect(response).toEqual(authUserTokenExpect),
				complete: () => expect(true).toBeTruthy(),
			});

			const req = httpTestingController.expectOne(
				'http://localhost:3000/auth/validate'
			);
			expect(req.request.method).toEqual('GET');
			req.flush(authUserTokenExpect);
			done();
		});

		it('should return an error with invalid credentials', (done) => {
			spyOn(authService, 'validate').and.returnValue(
				throwError(() => new Error('Invalid credentials'))
			);

			authService.validate(authUserTokenPayload).subscribe({
				error: (erro) => expect(erro.message).toEqual('Invalid credentials'),
			});

			done();
		});
	});
});

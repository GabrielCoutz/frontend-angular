import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { userCreatePayload, userExpectPayload } from './user.service.mocks';

import { throwError } from 'rxjs';

describe('UserService', () => {
	let httpTestingController: HttpTestingController;
	let userService: UserService;
	let httpClient: HttpClient;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});

		httpTestingController = TestBed.inject(HttpTestingController);
		userService = TestBed.inject(UserService);
		httpClient = TestBed.inject(HttpClient);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(userService).toBeTruthy();
	});

	describe('Create user', () => {
		it('should be created', () => {
			userService.create(userCreatePayload).subscribe({
				next: (response) => expect(response).toEqual(userExpectPayload),
				complete: () => expect(true).toBeTruthy(),
			});

			const req = httpTestingController.expectOne(
				'http://localhost:3000/users'
			);
			expect(req.request.method).toEqual('POST');
			req.flush(userExpectPayload);
		});

		it('should return an error with email already in use', () => {
			spyOn(userService, 'create').and.returnValue(
				throwError(() => new Error('Email already in use'))
			);

			userService.create(userCreatePayload).subscribe({
				error: (error) => expect(error.message).toEqual('Email already in use'),
			});
		});
	});

	describe('Update user', () => {
		it('should be updated', () => {
			const userId = '1';

			userService.update(userId, userCreatePayload).subscribe({
				next: (response) => expect(response).toEqual(userExpectPayload),
				complete: () => expect(true).toBeTruthy(),
			});

			const req = httpTestingController.expectOne(
				`http://localhost:3000/users/${userId}`
			);
			expect(req.request.method).toEqual('PATCH');
			req.flush(userExpectPayload);
		});

		it('should pass bearer token in authorization header', () => {
			const userId = '1';
			const expectedHeaders = { Authorization: 'Bearer null' };

			userService.update(userId, userCreatePayload).subscribe();

			const req = httpTestingController.expectOne(
				`http://localhost:3000/users/${userId}`
			);
			expect(req.request.method).toEqual('PATCH');
			expect(req.request.headers.get('Authorization')).toEqual(
				expectedHeaders.Authorization
			);
			req.flush(userExpectPayload);
		});

		it('should return an error with unauthorized user', () => {
			spyOn(userService, 'update').and.returnValue(
				throwError(() => new Error('Unauthorized user'))
			);
			const userId = '1';

			userService.update(userId, userCreatePayload).subscribe({
				error: (error) => expect(error.message).toEqual('Unauthorized user'),
			});
		});
	});

	describe('Delete user', () => {
		it('should be deleted', () => {
			const userId = '1';

			userService.delete(userId).subscribe({
				next: (response) => expect(response).toEqual(userExpectPayload),
				complete: () => expect(true).toBeTruthy(),
			});

			const req = httpTestingController.expectOne(
				`http://localhost:3000/users/${userId}`
			);
			expect(req.request.method).toEqual('DELETE');
			req.flush(userExpectPayload);
		});

		it('should pass bearer token in authorization header', () => {
			const userId = '1';
			const expectedHeaders = { Authorization: 'Bearer null' };

			userService.delete(userId).subscribe();

			const req = httpTestingController.expectOne(
				`http://localhost:3000/users/${userId}`
			);
			expect(req.request.method).toEqual('DELETE');
			expect(req.request.headers.get('Authorization')).toEqual(
				expectedHeaders.Authorization
			);
		});

		it('should return an error with unauthorized user', () => {
			spyOn(userService, 'delete').and.returnValue(
				throwError(() => new Error('Unauthorized user'))
			);

			const userId = '1';
			userService.delete(userId).subscribe({
				error: (error) => expect(error.message).toEqual('Unauthorized user'),
			});
		});
	});

	describe('Get user', () => {
		describe('All users', () => {
			it('should return an users array', () => {
				userService.getAll().subscribe({
					next: (response) => expect(response).toEqual([userExpectPayload]),
					complete: () => expect(true).toBeTruthy(),
				});

				const req = httpTestingController.expectOne(
					'http://localhost:3000/users'
				);
				expect(req.request.method).toEqual('GET');
				req.flush([userExpectPayload]);
			});
		});

		describe('Unique user', () => {
			it('should return a single user', () => {
				const userId = '1';

				userService.get(userId).subscribe({
					next: (response) => expect(response).toEqual(userExpectPayload),
					complete: () => expect(true).toBeTruthy(),
				});

				const req = httpTestingController.expectOne(
					`http://localhost:3000/users/${userId}`
				);
				expect(req.request.method).toEqual('GET');
				req.flush(userExpectPayload);
			});

			it('should return an error with user not found', () => {
				spyOn(userService, 'get').and.returnValue(
					throwError(() => new Error('User not found'))
				);

				const userId = '1';
				userService.get(userId).subscribe({
					error: (error) => expect(error.message).toEqual('User not found'),
				});
			});
		});
	});
});

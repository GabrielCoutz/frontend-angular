import { TestBed } from '@angular/core/testing';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';
import {
	productCreatePayload,
	productExpectPayload,
	productUpdatePayload,
} from './product.service.mocks';
import { throwError } from 'rxjs';

describe('ProductService', () => {
	let httpTestingController: HttpTestingController;
	let httpClient: HttpClient;
	let productService: ProductService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});

		httpTestingController = TestBed.inject(HttpTestingController);
		productService = TestBed.inject(ProductService);
		httpClient = TestBed.inject(HttpClient);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(productService).toBeTruthy();
	});

	describe('Create product', () => {
		it('should be created', () => {
			productService.create(productCreatePayload).subscribe({
				next: (response) => expect(response).toEqual(productExpectPayload),
				complete: () => expect(true).toBeTruthy(),
			});

			const req = httpTestingController.expectOne(
				'http://localhost:3000/products'
			);
			expect(req.request.method).toEqual('POST');
			req.flush(productExpectPayload);
		});

		it('should pass bearer token in authorization header', () => {
			const expectedHeaders = { Authorization: 'Bearer null' };

			productService.create(productCreatePayload).subscribe();

			const req = httpTestingController.expectOne(
				'http://localhost:3000/products'
			);
			expect(req.request.method).toEqual('POST');
			expect(req.request.headers.get('Authorization')).toEqual(
				expectedHeaders.Authorization
			);
			req.flush(productCreatePayload);
		});

		it('should return an error with unauthorized user', () => {
			spyOn(productService, 'create').and.returnValue(
				throwError(() => new Error('Unauthorized user'))
			);
			productService.create(productCreatePayload).subscribe({
				error: (error) => {
					expect(error.message).toEqual('Unauthorized user');
				},
			});
		});
	});

	describe('Update product', () => {
		it('should be updated', () => {
			productService.update('1', productUpdatePayload).subscribe({
				next: (response) => expect(response).toEqual(productExpectPayload),
				complete: () => expect(true).toBeTruthy(),
			});

			const req = httpTestingController.expectOne(
				'http://localhost:3000/products/1'
			);
			expect(req.request.method).toEqual('PATCH');
			req.flush(productExpectPayload);
		});

		it('should pass bearer token in authorization header', () => {
			const expectedHeaders = { Authorization: 'Bearer null' };

			productService.update('1', productUpdatePayload).subscribe();

			const req = httpTestingController.expectOne(
				'http://localhost:3000/products/1'
			);
			expect(req.request.method).toEqual('PATCH');
			expect(req.request.headers.get('Authorization')).toEqual(
				expectedHeaders.Authorization
			);
			req.flush(productUpdatePayload);
		});

		it('should return an error with unauthorized user', () => {
			spyOn(productService, 'update').and.returnValue(
				throwError(() => new Error('Unauthorized user'))
			);

			productService.update('1', productUpdatePayload).subscribe({
				error: (error) => {
					expect(error.message).toEqual('Unauthorized user');
				},
			});
		});
	});

	describe('Delete product', () => {
		it('should be deleted', () => {
			productService.delete('1').subscribe({
				next: (response) => expect(response).toEqual(productExpectPayload),
				complete: () => expect(true).toBeTruthy(),
			});

			const req = httpTestingController.expectOne(
				'http://localhost:3000/products/1'
			);
			expect(req.request.method).toEqual('DELETE');
			req.flush(productExpectPayload);
		});

		it('should pass bearer token in authorization header', () => {
			const expectedHeaders = { Authorization: 'Bearer null' };

			productService.delete('1').subscribe();
			const req = httpTestingController.expectOne(
				'http://localhost:3000/products/1'
			);

			expect(req.request.method).toEqual('DELETE');
			expect(req.request.headers.get('Authorization')).toEqual(
				expectedHeaders.Authorization
			);
		});

		it('should return and error with unauthorized user', () => {
			spyOn(productService, 'delete').and.returnValue(
				throwError(() => new Error('Unauthorized user'))
			);

			productService.delete('1').subscribe({
				error: (error) => {
					expect(error.message).toEqual('Unauthorized user');
				},
			});
		});
	});

	describe('Get product', () => {
		describe('All users', () => {
			it('should return an product array', () => {
				productService.getAll().subscribe({
					next: (response) => expect(response).toEqual([productExpectPayload]),
					complete: () => expect(true).toBeTruthy(),
				});

				const req = httpTestingController.expectOne(
					'http://localhost:3000/products'
				);
				expect(req.request.method).toEqual('GET');
				req.flush([productExpectPayload]);
			});
		});

		describe('Unique product', () => {
			it('should return a single product', () => {
				productService.get('1').subscribe({
					next: (response) => expect(response).toEqual(productExpectPayload),
					complete: () => expect(true).toBeTruthy(),
				});

				const req = httpTestingController.expectOne(
					'http://localhost:3000/products/1'
				);
				expect(req.request.method).toEqual('GET');
				req.flush(productExpectPayload);
			});
		});
	});
});

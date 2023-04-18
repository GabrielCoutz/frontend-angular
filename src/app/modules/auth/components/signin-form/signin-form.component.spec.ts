import { HttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of, throwError } from 'rxjs';
import { AuthService } from '../../../../services/auth/auth.service';
import { authUserResponse } from '../../../../services/auth/auth.service.mocks';
import { AuthModule } from '../../auth.module';

import { SigninFormComponent } from './signin-form.component';
import { signinFormMock } from './signin-form.mock';

describe('SigninFormComponent', () => {
	let fixture: ComponentFixture<SigninFormComponent>;
	let httpTestingController: HttpTestingController;
	let component: SigninFormComponent;
	let httpClient: HttpClient;
	let authService: AuthService;
	let router: Router;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SigninFormComponent],
			imports: [
				HttpClientTestingModule,
				AuthModule,
				BrowserAnimationsModule,
				RouterTestingModule,
			],
			providers: [provideMockStore()],
		}).compileComponents();

		httpTestingController = TestBed.inject(HttpTestingController);
		fixture = TestBed.createComponent(SigninFormComponent);
		router = TestBed.inject(Router);
		httpClient = TestBed.inject(HttpClient);
		authService = TestBed.inject(AuthService);
		store = TestBed.inject(MockStore);

		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('Submit form', () => {
		it('should call signin method of authService with valid data from form', () => {
			spyOn(authService, 'signin').and.returnValue(of(authUserResponse));
			spyOn(router, 'navigate');

			component.signinForm.setValue(signinFormMock);

			component.submit();

			authService.signin(signinFormMock).subscribe({
				next: (response) => expect(response).toEqual(authUserResponse),
				complete: () => expect(true).toBeTruthy(),
			});
			expect(authService.signin).toHaveBeenCalled();
			expect(router.navigate).toHaveBeenCalledWith(['/profile', '123', 'edit']);
		});

		it('should not call authService with invalid data from form', () => {
			spyOn(authService, 'signin').and.returnValue(of(authUserResponse));

			component.signinForm.setValue({
				...signinFormMock,
				email: 'examplegmail.com',
			});

			component.submit();

			expect(authService.signin).toHaveBeenCalledTimes(0);
		});

		it('should return an error with invalid credentials', () => {
			spyOn(authService, 'signin').and.returnValue(
				throwError(() => new Error('Invalid credentials'))
			);

			component.signinForm.setValue(signinFormMock);
			component.submit();

			authService.signin(signinFormMock).subscribe({
				error: (error) => expect(error.message).toBe('Invalid credentials'),
			});
			expect(authService.signin).toHaveBeenCalled();
		});
	});
});

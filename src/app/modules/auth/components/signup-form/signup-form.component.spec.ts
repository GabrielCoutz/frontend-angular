/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../../../../services/user/user.service';
import { userExpectPayload } from '../../../../services/user/user.service.mocks';
import { AuthModule } from '../../auth.module';

import { SignupFormComponent } from './signup-form.component';
import { of, throwError } from 'rxjs';
import { signupFormMock } from './signup-form.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { SigninFormComponent } from '../signin-form/signin-form.component';

describe('SignupFormComponent', () => {
	let fixture: ComponentFixture<SignupFormComponent>;
	let httpTestingController: HttpTestingController;
	let signupFormComponent: SignupFormComponent;
	let httpClient: HttpClient;
	let userService: UserService;
	let routerTestingModule: RouterTestingModule;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SignupFormComponent],
			imports: [
				HttpClientTestingModule,
				AuthModule,
				BrowserAnimationsModule,
				RouterTestingModule.withRoutes([
					{
						path: 'account/signin',
						component: SigninFormComponent,
					},
				]),
			],
		}).compileComponents();

		httpTestingController = TestBed.inject(HttpTestingController);
		routerTestingModule = TestBed.inject(RouterTestingModule);
		fixture = TestBed.createComponent(SignupFormComponent);
		httpClient = TestBed.inject(HttpClient);
		userService = TestBed.inject(UserService);
		signupFormComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should create', () => {
		expect(signupFormComponent).toBeTruthy();
	});

	describe('Submit form', () => {
		it('should call create method of userService with valid data from form', () => {
			spyOn(userService, 'create').and.returnValue(of(userExpectPayload));
			signupFormComponent.signupForm.setValue(signupFormMock);

			signupFormComponent.submit();

			expect(userService.create).toHaveBeenCalledTimes(1);
		});

		it('should not call userService with invalid data from form', () => {
			spyOn(userService, 'create').and.returnValue(of(userExpectPayload));

			signupFormComponent.signupForm.setValue({
				...signupFormMock,
				email: 'examplegmail.com',
			});

			signupFormComponent.submit();

			expect(userService.create).toHaveBeenCalledTimes(0);
		});

		it('should return an error with email already in use', () => {
			spyOn(userService, 'create').and.returnValue(
				throwError(() => new Error('Email already in use'))
			);

			signupFormComponent.signupForm.setValue(signupFormMock);

			signupFormComponent.submit();

			expect(userService.create).toHaveBeenCalledTimes(1);
			userService.create({} as any).subscribe({
				error: (erro) => expect(erro.message).toEqual('Email already in use'),
			});
		});
	});
});

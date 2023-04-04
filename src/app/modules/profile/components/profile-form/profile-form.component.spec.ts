import { HttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../../../services/user/user.service';
import { userExpectPayload } from '../../../../services/user/user.service.mocks';
import { AuthModule } from '../../../auth/auth.module';
import { ProfileModule } from '../../profile.module';

import { ProfileFormComponent } from './profile-form.component';

import { of, throwError } from 'rxjs';
import { profileFormMock } from './profile-form.mock';

describe('ProfileFormComponent', () => {
	let httpTestingController: HttpTestingController;
	let fixture: ComponentFixture<ProfileFormComponent>;
	let component: ProfileFormComponent;
	let httpClient: HttpClient;
	let userService: UserService;
	let router: Router;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProfileFormComponent],
			imports: [
				HttpClientTestingModule,
				AuthModule,
				BrowserAnimationsModule,
				RouterTestingModule,
				ProfileModule,
			],
		}).compileComponents();

		httpTestingController = TestBed.inject(HttpTestingController);
		fixture = TestBed.createComponent(ProfileFormComponent);
		httpClient = TestBed.inject(HttpClient);
		router = TestBed.inject(Router);
		userService = TestBed.inject(UserService);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('Submit form', () => {
		it('should call update from userService with valida data from form', () => {
			spyOn(userService, 'update').and.returnValue(of(userExpectPayload));

			component.profileForm.setValue(profileFormMock);

			component.submit();

			userService.update('123', profileFormMock).subscribe({
				next: (response) => expect(response).toEqual(userExpectPayload),
				complete: () => expect(true).toBeTruthy(),
			});
		});

		it('should not call userService with invalid data from form', () => {
			spyOn(userService, 'update').and.returnValue(of(userExpectPayload));

			component.profileForm.setValue({
				...profileFormMock,
				email: 'userexample.com',
			});

			component.submit();

			expect(userService.update).toHaveBeenCalledTimes(0);
		});

		it('should return an error from userService', () => {
			spyOn(userService, 'update').and.returnValue(
				throwError(() => new Error('Internal Error'))
			);

			component.profileForm.setValue(profileFormMock);

			component.submit();

			userService.update('123', profileFormMock).subscribe({
				error: (error) => expect(error.message).toEqual('Internal Error'),
			});
			expect(userService.update).toHaveBeenCalled();
		});
	});

	describe('Logout', () => {
		it('should call logout method and redirect to signin page', () => {
			spyOn(router, 'navigate');

			component.logout();

			expect(router.navigate).toHaveBeenCalledWith(['account/signin']);
		});
	});

	describe('On init', () => {
		it('should load data of user', () => {
			spyOn(userService, 'get').and.returnValue(of(userExpectPayload));

			component.ngOnInit();

			expect(userService.get).toHaveBeenCalledTimes(1);
			expect(component.profileForm.value.name).toEqual(userExpectPayload.name);
			expect(component.profileForm.value.email).toEqual(
				userExpectPayload.email
			);
		});

		it('should redirect to signin page if no user has been found', () => {
			spyOn(userService, 'get').and.returnValue(throwError(() => new Error()));
			spyOn(router, 'navigate');

			component.ngOnInit();

			userService.get('123').subscribe({
				error: (error) => expect(error).toBeTruthy(),
			});
			expect(router.navigate).toHaveBeenCalledWith(['account/signin']);
		});
	});
});

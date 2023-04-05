import { HttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProfileModule } from '../../modules/profile/profile.module';
import { UserService } from '../../services/user/user.service';
import { userExpectPayload } from '../../services/user/user.service.mocks';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
	let httpTestingController: HttpTestingController;
	let component: ProfileComponent;
	let httpClient: HttpClient;
	let fixture: ComponentFixture<ProfileComponent>;

	beforeEach(async () => {
		const userServiceSpy = jasmine.createSpyObj<UserService>({
			get: of(userExpectPayload),
			getAll: of([userExpectPayload]),
			create: of(userExpectPayload),
			update: of(userExpectPayload),
			delete: undefined,
		});

		await TestBed.configureTestingModule({
			declarations: [ProfileComponent],
			imports: [
				ProfileModule,
				HttpClientTestingModule,
				RouterTestingModule,
				BrowserAnimationsModule,
			],
			providers: [
				{
					provide: UserService,
					useValue: userServiceSpy,
				},
			],
		}).compileComponents();

		httpTestingController = TestBed.inject(HttpTestingController);
		fixture = TestBed.createComponent(ProfileComponent);
		httpClient = TestBed.inject(HttpClient);

		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

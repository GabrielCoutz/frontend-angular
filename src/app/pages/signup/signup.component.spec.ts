import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../services/user/user.service';
import { userExpectPayload } from '../../services/user/user.service.mocks';
import { of } from 'rxjs';

import { SignupComponent } from './signup.component';
import { AuthModule } from '../../modules/auth/auth.module';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SignupComponent', () => {
	let httpClient: HttpClient;
	let component: SignupComponent;
	let fixture: ComponentFixture<SignupComponent>;

	beforeEach(async () => {
		const userServiceSpy = jasmine.createSpyObj<UserService>({
			get: of(userExpectPayload),
			getAll: of([userExpectPayload]),
			create: of(userExpectPayload),
			update: of(userExpectPayload),
			delete: undefined,
		});
		await TestBed.configureTestingModule({
			declarations: [SignupComponent],
			imports: [AuthModule, HttpClientTestingModule, BrowserAnimationsModule],
			providers: [
				{
					provide: UserService,
					userValue: userServiceSpy,
				},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(SignupComponent);
		httpClient = TestBed.inject(HttpClient);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call modalEvent method', () => {
		component.handleModalEvent('test');

		expect(component.handleModalEvent).toHaveBeenCalledTimes(1);
	});
});

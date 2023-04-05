import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../services/auth/auth.service';
import { of } from 'rxjs';

import { SigninComponent } from './signin.component';
import {
	authUserResponse,
	authUserTokenExpect,
} from '../../services/auth/auth.service.mocks';
import { AuthModule } from '../../modules/auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../../components/header/header.component';

describe('SigninComponent', () => {
	let component: SigninComponent;
	let fixture: ComponentFixture<SigninComponent>;

	beforeEach(async () => {
		const authServiceSpy = jasmine.createSpyObj<AuthService>({
			signin: of(authUserResponse),
			validate: of(authUserTokenExpect),
		});

		await TestBed.configureTestingModule({
			declarations: [SigninComponent, HeaderComponent],
			imports: [AuthModule, BrowserAnimationsModule],
			providers: [
				{
					provide: AuthService,
					useValue: authServiceSpy,
				},
			],
		}).compileComponents();

		fixture = TestBed.createComponent(SigninComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call modalEvent method', () => {
		spyOn(component, 'handleModalEvent');
		component.handleModalEvent('test');

		expect(component.handleModalEvent).toHaveBeenCalledTimes(1);
	});
});

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
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('SigninComponent', () => {
	let signinComponent: SigninComponent;
	let fixture: ComponentFixture<SigninComponent>;
	let store: MockStore;

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
				provideMockStore(),
			],
		}).compileComponents();

		fixture = TestBed.createComponent(SigninComponent);
		store = TestBed.inject(MockStore);

		signinComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(signinComponent).toBeTruthy();
	});
});

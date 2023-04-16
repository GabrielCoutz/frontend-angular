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
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('SigninComponent', () => {
	let signinComponent: SigninComponent;
	let fixture: ComponentFixture<SigninComponent>;
	let store: MockStore;
	let router: Router;

	beforeEach(async () => {
		const authServiceSpy = jasmine.createSpyObj<AuthService>({
			signin: of(authUserResponse),
			validate: of(authUserTokenExpect),
		});

		await TestBed.configureTestingModule({
			declarations: [SigninComponent, HeaderComponent],
			imports: [AuthModule, BrowserAnimationsModule, RouterTestingModule],
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
		router = TestBed.inject(Router);

		signinComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(signinComponent).toBeTruthy();
	});

	describe('On init', () => {
		it('should redirect to profile if user is logged', () => {
			spyOn(router, 'navigate');
			signinComponent.userId$ = of('123');

			signinComponent.ngOnInit();

			expect(router.navigate).toHaveBeenCalledWith(['/profile', '123', 'edit']);
		});

		it('should not redirect if user is not logged', () => {
			spyOn(router, 'navigate');
			signinComponent.userId$ = of(undefined);

			signinComponent.ngOnInit();

			expect(router.navigate).not.toHaveBeenCalled();
		});
	});
});

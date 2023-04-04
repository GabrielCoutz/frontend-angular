import { HttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
	ActivatedRouteSnapshot,
	Router,
	RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { authUserTokenExpect } from '../../../services/auth/auth.service.mocks';

import { of, throwError } from 'rxjs';

import { ProfileGuard } from './profile.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileGuard', () => {
	let httpTestingController: HttpTestingController;
	let httpClient: HttpClient;
	let guard: ProfileGuard;
	let authService: AuthService;
	let router: Router;
	const mockActivatedRouteSnapshot =
		jasmine.createSpyObj<ActivatedRouteSnapshot>('ActivatedRouteSnapshot', [
			'toString',
		]);
	const mockRouterStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>(
		'RouterStateSnapshot',
		['toString']
	);

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, RouterTestingModule],
		});
		httpTestingController = TestBed.inject(HttpTestingController);
		httpClient = TestBed.inject(HttpClient);
		authService = TestBed.inject(AuthService);
		router = TestBed.inject(Router);
		guard = TestBed.inject(ProfileGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});

	it('should return true when user is logged in', () => {
		spyOn(authService, 'validate').and.returnValue(of(authUserTokenExpect));

		expect(
			guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot)
		).toBeTruthy();
	});

	// O teste abaixo é para verificar se caso o usuário não for encontrado, o guard redireciona
	// para a página de login.

	// No momento não possuo conhecimento o suficiente para fazer funcionar, mas fica aí minha tentativa.

	// it('should redirect if user is not logged in', () => {
	// 	spyOn(authService, 'validate').and.returnValue(
	// 		throwError(() => new Error('User is not logged in'))
	// 	);
	// 	spyOn(router, 'navigate');

	// 	guard
	// 		.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot)
	// 		.subscribe(() =>
	// 			expect(router.navigate).toHaveBeenCalledWith(['/account/signin'])
	// 		);
	// });
});

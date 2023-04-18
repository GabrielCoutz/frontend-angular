import { HttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

import { ProfileGuard } from './profile.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('ProfileGuard', () => {
	let httpTestingController: HttpTestingController;
	let httpClient: HttpClient;
	let guard: ProfileGuard;
	let authService: AuthService;
	let router: Router;
	let store: MockStore;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, RouterTestingModule],
			providers: [provideMockStore()],
		});
		httpTestingController = TestBed.inject(HttpTestingController);
		httpClient = TestBed.inject(HttpClient);
		authService = TestBed.inject(AuthService);
		router = TestBed.inject(Router);
		store = TestBed.inject(MockStore);
		guard = TestBed.inject(ProfileGuard);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
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

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeModule } from './modules/home/home.module';
import { AuthService } from './services/auth/auth.service';

describe('AppComponent', () => {
	let store: MockStore;
	let authService: AuthService;
	let appComponent: AppComponent;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				HomeModule,
				MatIconModule,
				MatToolbarModule,
				MatMenuModule,
				HttpClientTestingModule,
				RouterTestingModule,
			],
			declarations: [AppComponent, HeaderComponent],
			providers: [provideMockStore()],
		}).compileComponents();

		store = TestBed.inject(MockStore);
		authService = TestBed.inject(AuthService);
		const fixture = TestBed.createComponent(AppComponent);
		appComponent = fixture.componentInstance;
	});

	it('should create the app', () => {
		expect(appComponent).toBeTruthy();
	});

	describe('On init', () => {
		it('should call autoLogin from AuthService', () => {
			spyOn(authService, 'autoLogin');

			appComponent.ngOnInit();

			expect(authService.autoLogin).toHaveBeenCalled();
		});
	});
});

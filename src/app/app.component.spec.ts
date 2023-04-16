import { HttpClient } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeModule } from './modules/home/home.module';

describe('AppComponent', () => {
	let store: MockStore;
	let httpTestingController: HttpTestingController;
	let httpClient: HttpClient;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				HttpClientTestingModule,
				HomeModule,
				MatIconModule,
				MatToolbarModule,
				MatMenuModule,
			],
			declarations: [AppComponent, HeaderComponent],
			providers: [provideMockStore()],
		}).compileComponents();

		httpTestingController = TestBed.inject(HttpTestingController);
		httpClient = TestBed.inject(HttpClient);
		store = TestBed.inject(MockStore);
	});

	afterEach(() => {
		httpTestingController.verify();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});

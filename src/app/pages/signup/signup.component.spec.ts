import { ComponentFixture, TestBed } from '@angular/core/testing';

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
		await TestBed.configureTestingModule({
			declarations: [SignupComponent],
			imports: [AuthModule, HttpClientTestingModule, BrowserAnimationsModule],
		}).compileComponents();

		fixture = TestBed.createComponent(SignupComponent);
		httpClient = TestBed.inject(HttpClient);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

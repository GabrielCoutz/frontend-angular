import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;
	let store: MockStore;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HeaderComponent],
			imports: [
				MatToolbarModule,
				MatMenuModule,
				MatIconModule,
				RouterTestingModule,
			],
			providers: [provideMockStore({})],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderComponent);
		store = TestBed.inject(MockStore);

		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

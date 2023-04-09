import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
	let loadingComponent: LoadingComponent;
	let fixture: ComponentFixture<LoadingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LoadingComponent],
			imports: [MatProgressSpinnerModule],
		}).compileComponents();

		fixture = TestBed.createComponent(LoadingComponent);
		loadingComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(loadingComponent).toBeTruthy();
	});
});

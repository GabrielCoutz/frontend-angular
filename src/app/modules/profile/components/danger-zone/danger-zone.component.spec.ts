import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DangerZoneComponent } from './danger-zone.component';

describe('DangerZoneComponent', () => {
	let dangerZoneComponent: DangerZoneComponent;
	let fixture: ComponentFixture<DangerZoneComponent>;
	let matDialog: MatDialog;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DangerZoneComponent],
			imports: [MatDialogModule, MatExpansionModule, BrowserAnimationsModule],
		}).compileComponents();

		fixture = TestBed.createComponent(DangerZoneComponent);
		matDialog = TestBed.inject(MatDialog);
		dangerZoneComponent = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(dangerZoneComponent).toBeTruthy();
	});

	it('should open dialog', () => {
		spyOn(matDialog, 'open');

		dangerZoneComponent.openDialog();

		expect(matDialog.open).toHaveBeenCalled();
	});
});

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAccountFormComponent } from '../delete-account-form/delete-account-form.component';

@Component({
	selector: 'app-danger-zone',
	templateUrl: './danger-zone.component.html',
	styleUrls: ['./danger-zone.component.scss'],
})
export class DangerZoneComponent {
	constructor(public dialog: MatDialog) {}

	openDialog(): void {
		this.dialog.open(DeleteAccountFormComponent, {
			width: '500px',
			enterAnimationDuration: 200,
			exitAnimationDuration: 200,
			hasBackdrop: true,
		});
	}
}

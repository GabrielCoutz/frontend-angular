import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserService } from 'src/app/services/user/user.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [ProfileComponent, ProfileFormComponent],
	imports: [
		CommonModule,
		ProfileRoutingModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatIconModule,
		FlexLayoutModule,
		MatButtonModule,
		MatInputModule,
		MatSnackBarModule,
		SharedModule,
	],
	providers: [UserService],
})
export class ProfileModule {}

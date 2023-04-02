import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from '../../pages/signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupComponent } from '../../../app/pages/signup/signup.component';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from '../../../app/services/auth/auth.service';
@NgModule({
	declarations: [
		SignupComponent,
		SigninComponent,
		SigninFormComponent,
		SignupFormComponent,
	],
	imports: [
		CommonModule,
		AuthRoutingModule,
		SharedModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		FlexLayoutModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
	],
	providers: [AuthService],
})
export class AuthModule {}

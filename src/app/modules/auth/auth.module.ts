import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
	declarations: [SignupComponent, SigninComponent],
	imports: [CommonModule, AuthRoutingModule],
	providers: [],
})
export class AuthModule {}

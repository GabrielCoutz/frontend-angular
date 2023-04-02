import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../../pages/signup/signup.component';
import { SigninComponent } from '../../pages/signin/signin.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'signin',
	},
	{
		path: 'signin',
		component: SigninComponent,
	},
	{
		path: 'signup',
		component: SignupComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: async () =>
			(await import('./modules/home/home.module')).HomeModule,
		pathMatch: 'full',
	},
	{
		path: 'account',
		loadChildren: async () =>
			(await import('./modules/auth/auth.module')).AuthModule,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

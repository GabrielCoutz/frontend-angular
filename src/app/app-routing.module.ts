import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileGuard } from './modules/profile/guards/profile.guard';

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
	{
		path: 'profile/:id',
		loadChildren: async () =>
			(await import('./modules/profile/profile.module')).ProfileModule,
		canActivate: [ProfileGuard],
	},
	{
		path: 'products',
		loadChildren: async () =>
			(await import('./modules/product/product.module')).ProductModule,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

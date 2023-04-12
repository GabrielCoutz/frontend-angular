import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { DangerZoneComponent } from './components/danger-zone/danger-zone.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';

const routes: Routes = [
	{
		path: '',
		component: ProfileComponent,
		children: [
			{
				path: 'edit',
				component: ProfileFormComponent,
			},
			{
				path: 'products',
				children: [
					{
						path: '',
						component: MyProductsComponent,
					},
					{
						path: 'edit/:id',
						component: EditProductComponent,
					},
				],
			},
			{
				path: 'config',
				component: DangerZoneComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProfileRoutingModule {}

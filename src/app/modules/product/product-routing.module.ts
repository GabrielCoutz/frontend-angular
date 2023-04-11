import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../../pages/products/products.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: ProductsComponent,
	},
	{
		path: ':id',
		component: ProductComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}

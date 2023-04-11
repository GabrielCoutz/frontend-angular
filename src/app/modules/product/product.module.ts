import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../../pages/products/products.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [ProductsComponent, ProductComponent],
	imports: [CommonModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}

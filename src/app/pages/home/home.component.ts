import { Component } from '@angular/core';
import { IProductDefaultResponse } from 'src/app/services/product/interface/product-service.interface';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	constructor(private readonly productService: ProductService) {}
	productsList: IProductDefaultResponse[] = [];

	ngOnInit() {
		this.productService.getAll().subscribe({
			next: (products) => (this.productsList = products),
		});
	}
}

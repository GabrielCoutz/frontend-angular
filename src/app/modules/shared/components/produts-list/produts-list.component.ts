import { Component, Input } from '@angular/core';
import { IProductDefaultResponse } from 'src/app/services/product/interface/product-service.interface';

@Component({
	selector: 'app-produts-list',
	templateUrl: './produts-list.component.html',
	styleUrls: ['./produts-list.component.scss'],
})
export class ProdutsListComponent {
	@Input() products: IProductDefaultResponse[] = [];
}

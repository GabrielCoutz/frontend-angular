import { Component, Input } from '@angular/core';
import { IProduct } from '../../../../services/product/interface/product-service.interface';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent {
	@Input() public product: IProduct | undefined;
	@Input() public showDescription = false;
}

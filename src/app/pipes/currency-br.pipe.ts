import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'currencyBr',
})
export class CurrencyBrPipe implements PipeTransform {
	transform(value: string): string | null {
		const currencyPipe = new CurrencyPipe('pt-BR');
		return currencyPipe.transform(+value, 'BRL', 'symbol', '1.2-2');
	}
}

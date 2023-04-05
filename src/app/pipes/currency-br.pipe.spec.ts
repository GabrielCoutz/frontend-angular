import { CurrencyBrPipe } from './currency-br.pipe';
import { TestBed } from '@angular/core/testing';
import { SharedModule } from '../modules/shared/shared.module';

describe('CurrencyBrPipe', () => {
	let currencyBrPipe: CurrencyBrPipe;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [CurrencyBrPipe],
			imports: [SharedModule],
		});
		currencyBrPipe = TestBed.inject(CurrencyBrPipe);
	});

	it('create an instance', () => {
		const pipe = new CurrencyBrPipe();
		expect(pipe).toBeTruthy();
	});

	it('should return the value in BRL', () => {
		const value = '100';
		const result = currencyBrPipe.transform(value);

		expect(typeof result).toEqual('string');
	});
});

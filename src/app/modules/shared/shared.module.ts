import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutsListComponent } from './components/produts-list/produts-list.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { CurrencyBrPipe } from '../../pipes/currency-br.pipe';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

registerLocaleData(localePt);

@NgModule({
	declarations: [
		ProdutsListComponent,
		CurrencyBrPipe,
		ErrorComponent,
		LoadingComponent,
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		MatProgressSpinnerModule,
	],
	exports: [ProdutsListComponent, ErrorComponent],
	providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class SharedModule {}

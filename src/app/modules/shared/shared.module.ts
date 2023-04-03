import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutsListComponent } from './components/produts-list/produts-list.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [ProdutsListComponent],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
	],
	exports: [ProdutsListComponent],
})
export class SharedModule {}

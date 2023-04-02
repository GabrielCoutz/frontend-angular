import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutsListComponent } from './components/produts-list/produts-list.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [ProdutsListComponent],
	imports: [CommonModule, FlexLayoutModule],
	exports: [ProdutsListComponent],
})
export class SharedModule {}

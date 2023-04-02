import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutsListComponent } from './components/produts-list/produts-list.component';
import { FormComponent } from './components/form/form.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [ProdutsListComponent, FormComponent],
	imports: [CommonModule, FlexLayoutModule],
	exports: [ProdutsListComponent, FormComponent],
})
export class SharedModule {}

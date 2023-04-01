import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutsListComponent } from './components/produts-list/produts-list.component';

@NgModule({
  declarations: [ProdutsListComponent],
  imports: [CommonModule],
  exports: [ProdutsListComponent],
})
export class SharedModule {}

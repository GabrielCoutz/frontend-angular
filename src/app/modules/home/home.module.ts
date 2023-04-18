import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './components/intro/intro.component';
import { HomeComponent } from '../../../app/pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [IntroComponent, HomeComponent],
	imports: [CommonModule, SharedModule, HomeRoutingModule],
	providers: [],
})
export class HomeModule {}

import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/users/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productsReducer } from './store/product/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/product/product.effect';
import { UsersEffects } from './store/users/user.effect';
import { currentUserReducer } from './store/currentUser/currentUser.reducer';
import { CurrentUserEffects } from './store/currentUser/currentUser.effect';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatSlideToggleModule,
		FlexLayoutModule,
		MatToolbarModule,
		MatIconModule,
		MatDialogModule,
		MatButtonModule,
		MatMenuModule,
		LayoutModule,
		MatSidenavModule,
		AppRoutingModule,
		HttpClientModule,
		StoreModule.forRoot({
			user: userReducer,
			products: productsReducer,
			currentUser: currentUserReducer,
		}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		EffectsModule.forRoot([ProductsEffects, UsersEffects, CurrentUserEffects]),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

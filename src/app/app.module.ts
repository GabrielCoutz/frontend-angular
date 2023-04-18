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
import { userReducer } from './store/users/users.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productsReducer } from './store/products/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/products/products.effect';
import { UsersEffects } from './store/users/users.effect';
import { currentUserReducer } from './store/currentUser/currentUser.reducer';
import { CurrentUserEffects } from './store/currentUser/currentUser.effect';
import { MatDialogModule } from '@angular/material/dialog';
import { uniqueProductReducer } from './store/uniqueProduct/uniqueProduct.reducer';
import { UniqueProductsEffects } from './store/uniqueProduct/uniqueProduct.effect';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
		MatSnackBarModule,
		AppRoutingModule,
		HttpClientModule,
		StoreModule.forRoot({
			users: userReducer,
			currentUser: currentUserReducer,
			products: productsReducer,
			uniqueProduct: uniqueProductReducer,
		}),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		EffectsModule.forRoot([
			UsersEffects,
			CurrentUserEffects,
			ProductsEffects,
			UniqueProductsEffects,
		]),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

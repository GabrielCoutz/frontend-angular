import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserService } from 'src/app/services/user/user.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { DangerZoneComponent } from './components/danger-zone/danger-zone.component';
import { DeleteAccountFormComponent } from './components/delete-account-form/delete-account-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { DeleteProductFormComponent } from './components/delete-product-form/delete-product-form.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';

@NgModule({
	declarations: [
		ProfileComponent,
		ProfileFormComponent,
		DangerZoneComponent,
		DeleteAccountFormComponent,
		MyProductsComponent,
		EditProductComponent,
		DeleteProductFormComponent,
  CreateProductFormComponent,
	],
	imports: [
		CommonModule,
		ProfileRoutingModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatIconModule,
		FlexLayoutModule,
		MatButtonModule,
		MatInputModule,
		MatSnackBarModule,
		SharedModule,
		MatExpansionModule,
		MatDialogModule,
		MatTooltipModule,
		MatTabsModule,
	],
	providers: [UserService],
})
export class ProfileModule {}

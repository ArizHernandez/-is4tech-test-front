import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

import { HomeComponent } from './home/home.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { ProductsComponent } from './products/products.component';
import { AuthorizatedChannelComponent } from './authorizatedChannels/authorizatedChannels.component';
import { LayoutComponent } from './layout/layout.component';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponentsModule } from './private-components.module';

import { FormComponent as DistributorsFormComponent } from './distributors/form/form.component';
import { FormComponent as ProductsFormComponent } from './products/form/form.component';
import { FormComponent as AuthorizatedChannelsFormComponent } from './authorizatedChannels/form/form.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    DistributorsComponent,
    ProductsComponent,
    AuthorizatedChannelComponent,
    DistributorsFormComponent,
    ProductsFormComponent,
    AuthorizatedChannelsFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrivateRoutingModule,
    TranslocoModule,
    PrivateComponentsModule,
  ],
})
export class PrivateModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

import { HomeComponent } from './home/home.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { LayoutComponent } from './layout/layout.component';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponentsModule } from './private-components.module';

import { FormComponent as DistributorsFormComponent } from './distributors/form/form.component';

@NgModule({
  declarations: [HomeComponent, LayoutComponent, DistributorsComponent, DistributorsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrivateRoutingModule,
    TranslocoModule,
    PrivateComponentsModule,
  ],
})
export class PrivateModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [HomeComponent, LayoutComponent],
  imports: [CommonModule, PrivateRoutingModule, SharedModule, TranslocoModule],
})
export class PrivateModule {}

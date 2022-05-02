import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { NewRecordCardModule } from '../../components/new-record-card/new-record-card.module';
import { SharedModule } from '../../shared/shared.module';
import { CardModule } from '../../components/card/card.module';

const components = [
  CardModule,
  SharedModule,
  NewRecordCardModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatChipsModule,
  MatDialogModule,
  MatSelectModule,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class PrivateComponentsModule {}

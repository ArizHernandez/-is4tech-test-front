import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { MatIconModule } from '@angular/material/icon';

import { NewRecordCardComponent } from './new-record-card.component';

@NgModule({
  declarations: [NewRecordCardComponent],
  imports: [CommonModule, TranslocoModule, MatIconModule],
  exports: [NewRecordCardComponent],
})
export class NewRecordCardModule {}

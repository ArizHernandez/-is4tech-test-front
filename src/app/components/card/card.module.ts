import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TranslocoModule } from '@ngneat/transloco';

import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MatCardModule, TranslocoModule],
  exports: [CardComponent],
})
export class CardModule {}

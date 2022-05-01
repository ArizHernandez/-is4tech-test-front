import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { TranslationButtonComponent } from './translation-button.component';

@NgModule({
  declarations: [TranslationButtonComponent],
  imports: [CommonModule, MatMenuModule, MatIconModule],
  exports: [TranslationButtonComponent],
})
export class TranslationButtonModule {}

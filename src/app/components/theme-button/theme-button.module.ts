import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ThemeButtonComponent } from './theme-button.component';

@NgModule({
  declarations: [ThemeButtonComponent],
  imports: [CommonModule, MatMenuModule, MatIconModule],
  exports: [ThemeButtonComponent],
})
export class ThemeButtonModule {}

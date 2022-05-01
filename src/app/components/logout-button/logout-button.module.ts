import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutButtonComponent } from './logout-button.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LogoutButtonComponent],
  imports: [CommonModule, MatMenuModule, MatIconModule],
  exports: [LogoutButtonComponent],
})
export class LogoutButtonModule {}

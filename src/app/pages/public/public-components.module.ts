import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { TranslationButtonModule } from '../../components/translation-button/translation-button.module';
import { ThemeButtonModule } from '../../components/theme-button/theme-button.module';

const components = [
  TranslationButtonModule,
  ThemeButtonModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule,
];

@NgModule({
  imports: [...components],
  exports: [...components],
})
export class PublicComponentsModule {}

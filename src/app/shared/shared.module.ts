import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { AsideComponent } from './aside/aside.component';
import { RouterModule } from '@angular/router';

import { LogoutButtonModule } from '../components/logout-button/logout-button.module';
import { ThemeButtonModule } from '../components/theme-button/theme-button.module';
import { TranslationButtonModule } from '../components/translation-button/translation-button.module';

import { TranslocoModule } from '@ngneat/transloco';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MenuComponent, AsideComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    ThemeButtonModule,
    MatSidenavModule,
    TranslationButtonModule,
    TranslocoModule,
    RouterModule,
    LogoutButtonModule,
  ],
  exports: [MenuComponent],
})
export class SharedModule {}

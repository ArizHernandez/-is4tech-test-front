import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { TranslationButtonModule } from '../../components/translation-button/translation-button.module';
import { ThemeButtonModule } from '../../components/theme-button/translation-button.module';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    TranslocoModule,
    MatInputModule,
    MatIconModule,
    TranslationButtonModule,
    ThemeButtonModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class PublicModule {}

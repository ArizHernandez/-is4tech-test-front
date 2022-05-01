import { Component } from '@angular/core';
import { Theme } from 'src/app/interfaces/theme';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
})
export class ThemeButtonComponent {
  themeActive: string;

  constructor(private themeService: ThemeService) {
    this.themeActive = themeService.themeActive;
  }

  toggleTheme(theme: Theme) {
    this.themeService.toggleTheme(theme);

    this.themeActive = theme;
  }
}

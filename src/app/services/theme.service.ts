import { Injectable } from '@angular/core';
import { StorageService } from '../utilities/storage';
import { Theme } from 'src/app/interfaces/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public themeActive: string;

  constructor(private storage: StorageService) {
    this.themeActive = this.storage.getTheme()!;
  }

  toggleTheme(theme: Theme) {
    this.storage.setTheme(theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

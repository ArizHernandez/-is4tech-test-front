import { Injectable } from '@angular/core';
import { StorageService } from '../utilities/storage';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public themeActive: string;

  constructor(private storage: StorageService) {
    this.themeActive = this.storage.getTheme()!;
  }

  toggleTheme(theme: 'light' | 'dark') {
    this.storage.setTheme(theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}

import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { StorageService } from './utilities/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'is4tech-test-front';

  constructor(private storage: StorageService) {
    if (
      storage.getTheme() === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.storage.setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      this.storage.setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }
}

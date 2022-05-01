import { Theme } from '../interfaces/theme';

export class ThemeServiceMock {
  public themeActive: string = 'light';

  public toggleTheme(theme: Theme) {
    this.themeActive = theme;
  }
}

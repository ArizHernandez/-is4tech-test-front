import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeButtonComponent } from './theme-button.component';
import { ThemeService } from '../../services/theme.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Theme } from 'src/app/interfaces/theme';
import { ThemeServiceMock } from '../../__mocks__/ThemeService';

describe('TranslationButtonComponent', () => {
  let component: ThemeButtonComponent;
  let fixture: ComponentFixture<ThemeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeButtonComponent],
      imports: [MatMenuModule, MatIconModule],
      providers: [{ provides: ThemeService, useValue: ThemeServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Toggle to dark Theme', () => {
    component.toggleTheme('dark');

    expect(component.themeActive).toBe('dark');
  });

  it('Toggle to light Theme', () => {
    component.toggleTheme('light');

    expect(component.themeActive).toBe('light');
  });
});

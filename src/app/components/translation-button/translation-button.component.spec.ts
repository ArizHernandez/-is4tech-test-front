import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationButtonComponent } from './translation-button.component';

describe('TranslationButtonComponent', () => {
  let component: TranslationButtonComponent;
  let fixture: ComponentFixture<TranslationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranslationButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

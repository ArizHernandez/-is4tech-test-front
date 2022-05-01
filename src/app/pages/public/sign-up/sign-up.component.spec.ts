import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslocoModule } from '@ngneat/transloco';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslationButtonModule } from '../../../components/translation-button/translation-button.module';
import { ThemeButtonModule } from '../../../components/theme-button/theme-button.module';
import { ValidatorsService } from '../../../services/validators.service';
import { AuthService } from '../../../services/auth.service';
import { AuthServiceMock } from '../../../__mocks__/AuthService';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [
        BrowserAnimationsModule,
        TranslocoModule,
        MatInputModule,
        MatIconModule,
        TranslationButtonModule,
        ThemeButtonModule,
        MatCheckboxModule,
        MatButtonModule,
        ReactiveFormsModule,
      ],
      providers: [
        FormBuilder,
        ValidatorsService,
        { provide: AuthService, useValue: AuthServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form be invalid if form fields are invalid', () => {
    const submit = fixture.debugElement.query(By.css('button'));
    submit.triggerEventHandler('click', null);

    expect(component.myForm.valid).toBeFalse();
  });

  it('should form be valid', () => {
    const nameControl = component.myForm.get('user')!;
    const passwordControl = component.myForm.get('password')!;
    const confirmPasswordControl = component.myForm.get('confirmPassword')!;

    nameControl.setValue('test');
    passwordControl.setValue('123456');
    confirmPasswordControl.setValue('123456');

    const submit = fixture.debugElement.query(By.css('button'));
    submit.triggerEventHandler('click', null);

    expect(component.myForm.valid).toBeTrue();
  });

  it('should password to be equal to confirm password', () => {
    const nameControl = component.myForm.get('user')!;
    const passwordControl = component.myForm.get('password')!;
    const confirmPasswordControl = component.myForm.get('confirmPassword')!;

    nameControl.setValue('test');
    passwordControl.setValue('123456');
    confirmPasswordControl.setValue('123476');

    const submit = fixture.debugElement.query(By.css('button'));
    submit.triggerEventHandler('click', null);

    expect(component.myForm.valid).toBeFalse();
    expect(component.myForm.errors?.['noEqualControls']).toBeTruthy();
  });
});

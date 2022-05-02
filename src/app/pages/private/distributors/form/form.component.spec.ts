import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { DistributorsService } from 'src/app/services/distributors.service';
import { TranslocoModule } from '@ngneat/transloco';
import { FormComponent } from './form.component';
import { DistributorsServiceMock } from '../../../../__mocks__/DistributorsService';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule, TranslocoModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: DistributorsService, useValue: DistributorsServiceMock },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should form be invalid when fields are empty', () => {
    const element = fixture.nativeElement.querySelector('button[type="submit"]');
    element.click();
    fixture.detectChanges();

    expect(component.myForm.valid).toBeFalsy();
  });

  it('should call onSubmit method', () => {
    const codeControl = component.myForm.get('code')!;
    const nameControl = component.myForm.get('name')!;
    const emailNotificateControl = component.myForm.get('email_notificate')!;
    const emailAlertControl = component.myForm.get('email_alert')!;

    const spy = spyOn(component, 'onSubmit').and.returnValue();

    codeControl.setValue('code');
    nameControl.setValue('test');
    emailNotificateControl.setValue('test@test.com');
    emailAlertControl.setValue('code@code.com');

    const element = fixture.nativeElement.querySelector('button[type="submit"]');
    element.click();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});

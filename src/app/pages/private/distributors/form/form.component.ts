/* eslint-disable import/no-cycle */
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DistributorsComponent } from '../distributors.component';
import { Distributor, DistributorBody } from '../../../../interfaces/distributor';
import { DistributorsService } from '../../../../services/distributors.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  id!: number;

  myForm = this.fb.group({
    code: ['', [Validators.required]],
    name: ['', [Validators.required]],
    email_notificate: [
      '',
      [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
    ],
    email_alert: [
      '',
      [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
    ],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DistributorsComponent>,
    private distributorsService: DistributorsService,
    @Inject(MAT_DIALOG_DATA) public data: Distributor
  ) {
    if (data) {
      this.id = data.id;
      this.myForm.reset({
        code: data.code,
        name: data.name,
        email_notificate: data.email_notificate,
        email_alert: data.email_alert,
      });
    }
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();

      return;
    }

    let error;

    if (this.id) {
      error = this.distributorsService.putDistributor(
        this.myForm.value as DistributorBody,
        this.id
      );
    } else {
      error = this.distributorsService.postDistributor(this.myForm.value as DistributorBody);
    }

    if (!error) {
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

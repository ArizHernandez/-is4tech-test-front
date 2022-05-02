/* eslint-disable import/no-cycle */
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AuthorizatedChannelComponent } from '../authorizatedChannels.component';
import {
  AuthorizatedChannel,
  AuthorizatedChannelBody,
} from '../../../../interfaces/authorizatedChannel';

import { DistributorsService } from '../../../../services/distributors.service';
import { AuthorizatedChannelsService } from '../../../../services/authorizatedChannels.service';

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
    distributor_id: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AuthorizatedChannelComponent>,
    private distributorsService: DistributorsService,
    private authorizatedChannelsService: AuthorizatedChannelsService,
    @Inject(MAT_DIALOG_DATA) public data: AuthorizatedChannel
  ) {
    this.distributorsService.getDistributors();
    if (data) {
      this.id = data.id;

      this.myForm.reset({
        code: data.code,
        name: data.name,
        distributor_id: data.distributor_id,
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
      error = this.authorizatedChannelsService.putAuthorizatedChannel(
        this.myForm.value as AuthorizatedChannelBody,
        this.id
      );
    } else {
      error = this.authorizatedChannelsService.postAuthorizatedChannel(
        this.myForm.value as AuthorizatedChannelBody
      );
    }

    if (!error) {
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  get distributors() {
    return this.distributorsService.distributors;
  }
}

/* eslint-disable import/no-cycle */
import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProductsComponent } from '../products.component';
import { ProductBody, Product } from '../../../../interfaces/product';

import { DistributorsService } from '../../../../services/distributors.service';
import { ProductsService } from '../../../../services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  id!: number;

  myForm = this.fb.group({
    amount: [0.0, [Validators.required, Validators.min(0)]],
    code: ['', [Validators.required]],
    description: [''],
    distributor_id: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductsComponent>,
    private distributorsService: DistributorsService,
    private productsService: ProductsService,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    this.distributorsService.getDistributors();
    if (data) {
      this.id = data.id;

      this.myForm.reset({
        code: data.code,
        amount: data.amount,
        description: data.description,
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
      error = this.productsService.putProduct(this.myForm.value as ProductBody, this.id);
    } else {
      error = this.productsService.postProduct(this.myForm.value as ProductBody);
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

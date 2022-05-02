/* eslint-disable import/no-cycle */
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../interfaces/product';

import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  get products() {
    return this.productsService.products;
  }

  constructor(private productsService: ProductsService, public dialog: MatDialog) {
    productsService.getProducts();
  }

  delete(id: number) {
    this.productsService.deleteProduct(id);
  }

  openModal(values?: Product) {
    this.dialog.open(FormComponent, {
      width: '250px',
      data: values,
    });
  }
}

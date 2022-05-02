/* eslint-disable import/no-cycle */
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DistributorsService } from '../../../services/distributors.service';
import { Distributor } from '../../../interfaces/distributor';

import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.scss'],
})
export class DistributorsComponent {
  get distributors() {
    return this.distributorsService.distributors;
  }

  constructor(private distributorsService: DistributorsService, public dialog: MatDialog) {
    distributorsService.getDistributors();
  }

  delete(id: number) {
    this.distributorsService.deleteDistributor(id);
  }

  openModal(values?: Distributor) {
    this.dialog.open(FormComponent, {
      width: '250px',
      data: values,
    });
  }
}

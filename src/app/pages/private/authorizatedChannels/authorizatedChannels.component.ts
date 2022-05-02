/* eslint-disable import/no-cycle */
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthorizatedChannelsService } from '../../../services/authorizatedChannels.service';

import { FormComponent } from './form/form.component';
import { AuthorizatedChannel } from '../../../interfaces/authorizatedChannel';

@Component({
  selector: 'app-authorizated-channels',
  templateUrl: './authorizatedChannels.component.html',
  styleUrls: ['./authorizatedChannels.component.scss'],
})
export class AuthorizatedChannelComponent {
  get authorizatedChannels() {
    return this.authorizatedChannelService.authorizatedChannels;
  }

  constructor(
    private authorizatedChannelService: AuthorizatedChannelsService,
    public dialog: MatDialog
  ) {
    authorizatedChannelService.getAuthorizatedChannels();
  }

  delete(id: number) {
    this.authorizatedChannelService.deleteAuthorizatedChannel(id);
  }

  openModal(values?: AuthorizatedChannel) {
    this.dialog.open(FormComponent, {
      width: '250px',
      data: values,
    });
  }
}

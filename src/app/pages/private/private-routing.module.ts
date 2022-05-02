import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { HomeComponent } from './home/home.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { ProductsComponent } from './products/products.component';
import { AuthorizatedChannelComponent } from './authorizatedChannels/authorizatedChannels.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'distributors',
        component: DistributorsComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'authorizated-channels',
        component: AuthorizatedChannelComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}

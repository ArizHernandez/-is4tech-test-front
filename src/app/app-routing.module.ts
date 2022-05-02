import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IsAuthGuard } from './guards/is-auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [NoAuthGuard],
    canLoad: [NoAuthGuard],
    loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule),
  },
  {
    path: '',
    canActivate: [IsAuthGuard],
    canLoad: [IsAuthGuard],
    loadChildren: () => import('./pages/private/private.module').then(m => m.PrivateModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

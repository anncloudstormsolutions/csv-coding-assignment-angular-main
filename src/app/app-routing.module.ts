import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  {
    path: 'view',
    loadChildren: () => import('../pages/view/view.module').then(m => m.ViewPageModule),
    data: { preload: false, delay: false }
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('../pages/detail/detail.module').then(m => m.DetailPageModule),
    data: { preload: false, delay: false }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

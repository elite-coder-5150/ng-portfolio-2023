import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'social',
    loadChildren: () => import('./modules/social/social.module').then(m => m.SocialModule) 
  },          



  {
    path: 'User',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'ecommerce',
    loadChildren: () => import('./modules/ecommerce/ecommerce.module').then(m => m.EcommerceModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'social',
    loadChildren: () => import('./modules/social/social.module').then(m => m.SocialModule) 
  },          

  {
    path: 'task-manager',
    loadChildren: () => import('./modules/task-manager/task-manager.module').then(m => m.TaskManagerModule) 
  },

  {
    path: 'User',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

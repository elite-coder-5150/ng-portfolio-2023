import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgChatComponent } from './ng-chat/ng-chat.component';
import { HomeComponent } from './home/home.component';  
import { StatusUpdateComponent } from './status-update/status-update.component';
const routes: Routes = [
  {
    path: '',
    component: StatusUpdateComponent,
  },
  {
    path: 'chat',
    component: NgChatComponent,
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }

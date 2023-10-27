import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component'
const routes: Routes = [
  {
    path: 'new-task',
    component: NewTaskFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TaskManagerRoutingModule { }

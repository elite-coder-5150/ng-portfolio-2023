import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component'
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
const routes: Routes = [
  {
    path: 'new-task',
    component: NewTaskFormComponent
  },
  {
    path: 'task-list',
    component: TaskListComponent
  },
  {
    path: 'task/:taskId',
    component: EditTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TaskManagerRoutingModule { }

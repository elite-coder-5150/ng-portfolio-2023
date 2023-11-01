import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskListComponent } from './task-list/task-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TaskManagerComponent } from './task-manager/task-manager.component';

@NgModule({
  declarations: [
    AddTaskComponent,
    NewTaskFormComponent,
    EditTaskComponent,
    TaskListComponent,
    TaskManagerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class TaskManagerModule { }

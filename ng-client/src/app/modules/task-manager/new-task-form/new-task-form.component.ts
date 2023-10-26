import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'ng-new-task-form',
    templateUrl: './new-task-form.component.html',
    styleUrls: ['./new-task-form.component.scss'],
})
export class NewTaskFormComponent {
    newTaskForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.newTaskForm = this.fb.group({
            id: '',
            assignee: ['', Validators.required],
            priority: ['low', Validators.required],
            isCompoleted: false,
            status: 'todo',
            date_modified: new Date(),
            date_complete: new Date(),
        });
    }

    onSubmit(): void {
        if (this.newTaskForm.valid) {
            console.log(this.newTaskForm.value);
        }
    }
}

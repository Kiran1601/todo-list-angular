import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  taskName: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.taskName.trim() === '') {
      return;
    }

    const newTask = { name: this.taskName, completed: false };
    this.taskService.addTask(newTask).subscribe(() => {
      this.taskName = '';
    });
  }
}

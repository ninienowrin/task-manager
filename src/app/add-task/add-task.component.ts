import { Component } from '@angular/core';
import { TaskService, Task } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class AddTaskComponent {
  newTaskTitle = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle.trim(),
        completed: false
      };
      this.taskService.addTask(newTask);
      this.newTaskTitle = '';
    }
  }
}

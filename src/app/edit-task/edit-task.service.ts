import { Injectable } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Injectable({
  providedIn: 'root'
})
export class EditTaskService {

  constructor(private taskService: TaskService) {}

  editTask(id: number, updatedTitle: string): void {
    const tasks = this.taskService.getTasks().map(task =>
      task.id === id ? { ...task, title: updatedTitle } : task
    );
    this.taskService.updateTasks(tasks);
  }
}

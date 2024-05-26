import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, Task } from '../task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  imports: [CommonModule, AddTaskComponent, TaskItemComponent]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filter: string = 'all'; // Default filter to show all tasks

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  setFilter(filter: string) {
    this.filter = filter;
  }

  getFilteredTasks(): Task[] {
    switch (this.filter) {
      case 'all':
        return this.tasks;
      case 'completed':
        return this.tasks.filter(task => task.completed);
      case 'remaining':
        return this.tasks.filter(task => !task.completed);
      default:
        return this.tasks;
    }
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  toggleTaskCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  imports: [CommonModule]
})
export class TaskItemComponent {
  @Input() task!: Task; // Non-null assertion
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

  constructor(private router: Router,private taskService: TaskService) {}

  onDelete(event: Event): void {
    event.stopPropagation();
    this.delete.emit(this.task.id);
  }

  editTask(): void {
    this.router.navigate(['/edit-task', this.task.id]);
  }

  onToggle(event: Event): void {
    event.stopPropagation();
    this.taskService.toggleTaskCompletion(this.task.id);
  }
}

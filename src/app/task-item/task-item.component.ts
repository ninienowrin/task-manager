import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.service';
import { CommonModule } from '@angular/common';

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

  onDelete(): void {
    this.delete.emit(this.task.id);
  }

  onToggle(): void {
    this.toggle.emit(this.task.id);
  }
}

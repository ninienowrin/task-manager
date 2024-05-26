import { Component, OnInit } from '@angular/core';
import { TaskService,Task } from '../task.service';
import { EditTaskService } from './edit-task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class EditTaskComponent implements OnInit {
  taskId!: number;
  task!: Task;
  updatedTitle: string = '';

  constructor(
    private editTaskService: EditTaskService,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.taskId = +this.route.snapshot.paramMap.get('id')!;
    const tasks = this.taskService.getTasks();
    this.task = tasks.find(task => task.id === this.taskId)!;
    this.updatedTitle = this.task.title;
  }

  save(): void {
    if (this.updatedTitle.trim()) {
      this.editTaskService.editTask(this.taskId, this.updatedTitle);
      this.router.navigate(['/tasks']);
    }
  }
}

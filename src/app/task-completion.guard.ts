import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class TaskCompletionGuard implements CanActivate {
  constructor(
    private taskService: TaskService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const taskId = +route.paramMap.get('id')!;
    console.log(`Task ID from route: ${taskId}`); // Debugging line

    const tasks = this.taskService.getTasks();
    console.log(`Tasks from TaskService: ${JSON.stringify(tasks)}`); // Debugging line

    const task = tasks.find(task => task.id === taskId);
    console.log(`Found Task: ${JSON.stringify(task)}`); // Debugging line

    if (task) {
      if (task.completed) {
        alert('This task has been completed');
        this.router.navigate(['/tasks']);
        return false;
      }
      return true;
    } else {
      console.warn('Task not found'); // Debugging line
      this.router.navigate(['/tasks']);
      return false;
    }
  }
}

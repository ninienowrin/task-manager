import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject: BehaviorSubject<Task[]>;
  public tasks$: Observable<Task[]>;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    let storedTasks: Task[] = [];

    if (isPlatformBrowser(this.platformId)) {
      storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    this.tasksSubject = new BehaviorSubject<Task[]>(storedTasks);
    this.tasks$ = this.tasksSubject.asObservable();
  }

  private updateLocalStorage(tasks: Task[]): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  getTasks(): Task[] {
    return this.tasksSubject.value;
  }

  addTask(task: Task): void {
    const tasks = [...this.tasksSubject.value, task];
    this.tasksSubject.next(tasks);
    this.updateLocalStorage(tasks);
  }

  deleteTask(id: number): void {
    const tasks = this.tasksSubject.value.filter(task => task.id !== id);
    this.tasksSubject.next(tasks);
    this.updateLocalStorage(tasks);
  }

  toggleTaskCompletion(id: number): void {
    const tasks = this.tasksSubject.value.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasksSubject.next(tasks);
    this.updateLocalStorage(tasks);
  }
}

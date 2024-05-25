import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterModule, TaskListComponent]
})
export class AppComponent {
  title = 'task-manager';

  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }
}

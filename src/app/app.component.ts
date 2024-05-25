import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterModule, TaskListComponent]
})
export class AppComponent implements OnInit {
  title = 'task-manager';
  showLogoutButton: boolean = true;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      // @ts-ignore
    ).subscribe((event: NavigationEnd) => {
      this.showLogoutButton = event.url === '/tasks';
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }
}

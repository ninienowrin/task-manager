import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  imports: [CommonModule]
})
export class LogoutComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }

  goTasks() {
    // this.router.navigate(['/tasks']);
  }
}

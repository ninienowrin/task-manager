import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  public loggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  constructor(private router: Router) {}

  login(username: string, password: string): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      this.loggedInSubject.next(true);
      this.router.navigate(['/tasks']);
    } else {
      alert('Invalid credentials');
    }
  }

  register(username: string, password: string): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((u: any) => u.username === username);

    if (userExists) {
      alert('User already exists');
    } else {
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful. Please login.');
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.loggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }
}

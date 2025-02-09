import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private apiUrl = 'https://localhost:5001/api'; // Adjust to your actual API endpoint

  constructor(private http: HttpClient, private router: Router) {
    // Check if user is already logged in from localStorage when the app starts
    if (localStorage.getItem('loggedInUser')) {
      this.loggedIn.next(true);
    }
  }

  // Get logged-in user details (for example, user data)
  getLoggedInUser() {
    const userData = localStorage.getItem('loggedInUser');
    return userData ? JSON.parse(userData) : null;
  }

  // Login function
  login(credentials: { email: string, password: string }) {
    return this.http.post<any>(`${this.apiUrl}/Login`, credentials).subscribe(
      (response) => {
        // Assuming user data is returned upon successful login
        if (response.User) {
          localStorage.setItem('loggedInUser', JSON.stringify(response.User));
          this.loggedIn.next(true); // Notify that the user is logged in
           // Refresh the current route
           const currentUrl = this.router.url;
           this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
             this.router.navigate([currentUrl]);
           });
        }
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

  // Logout function
  logout() {
    localStorage.removeItem('loggedInUser');
    this.loggedIn.next(false); // Notify that the user is logged out
    this.router.navigate(['/']); // Redirect to home or login page
  }

  // Check if user is logged in
  isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}

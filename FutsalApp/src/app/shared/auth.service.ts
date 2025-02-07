import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RegisterDetail } from './register-detail';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:5001/api/Register'; // Adjust to your actual endpoint

  constructor(private http: HttpClient) {}

  // Register function
  register(userData: { name: string; email: string; password: string; roleId: number }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, userData).pipe(
      tap(response => {
        if (response.User) {
          localStorage.setItem('user', JSON.stringify(response.User)); // Store user details
        }
      })
    );
  }

  // Login function
  login(userData: RegisterDetail) {
    localStorage.setItem('loggedInUser', JSON.stringify(userData)); // Store logged-in user details
  }

  // Get logged-in user
  getLoggedInUser(): RegisterDetail | null {
    const userData = localStorage.getItem('loggedInUser');
    return userData ? JSON.parse(userData) : null; // Return null if no user data
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    // Check the actual login status (e.g., by checking if a token exists in localStorage)
    return !!localStorage.getItem('user-token');
  }
  

  // Logout function (optional)
  logout() {
    localStorage.removeItem('loggedInUser');
  }
}

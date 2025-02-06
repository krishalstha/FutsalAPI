import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RegisterDetail } from './register-detail';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:5001/api/Register';

  constructor(
    private http: HttpClient) {}

  register(userData: { name: string; email: string; password: string; roleId: number }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, userData).pipe(
      tap(response => {
        if (response.User) {
          localStorage.setItem('user', JSON.stringify(response.User)); // Store user details
        }
      })
    );
  }
  login(userData: RegisterDetail) {
    localStorage.setItem('loggedInUser', JSON.stringify(userData));
  }

  getLoggedInUser(): RegisterDetail | null {
    const userData = localStorage.getItem('loggedInUser');
    return userData ? JSON.parse(userData) : null;
  }
    // Logout function (optional)
  logout() {
    localStorage.removeItem('loggedInUser');
  }
}

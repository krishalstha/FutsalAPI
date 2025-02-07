import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component'; // Adjust the path as needed
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {

  constructor(private dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  openLoginDialog(): void {
    console.log('Book Now button clicked');
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/futsal-page']);
    } else {
      this.dialog.open(LoginComponent, {
        width: '400px',
        disableClose: false,
      });
    }
  }
  
}

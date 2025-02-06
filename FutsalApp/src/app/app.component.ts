import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDetailService } from './shared/login-detail.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Router } from '@angular/router'; 
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn = false;
  userType: string | null = null;
  
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private loginService: LoginDetailService
  ) {}
  ngOnInit(): void {
    // Check login state on load
    this.userType = localStorage.getItem('userType');


    this.loginService.loggedIn$.subscribe((status) => {
   this.isLoggedIn = status;  
    });
    const userType = localStorage.getItem('userType');
    if (userType) {
      this.isLoggedIn = true;
    }
  }
// Method to handle login
login() {
  // Logic for user login (e.g., call authentication service)
  this.isLoggedIn = true;
  localStorage.setItem('userType', 'user');  // Store login type or other details if needed

}
  logout(): void {
    localStorage.removeItem('userType');
    this.isLoggedIn = false;
    this.userType = null;
    this.router.navigate(['/home']);
    this.loginService.setLoginStatus(false);  
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result?.isLoggedIn) {
        // Update login state
        this.isLoggedIn = true;
        this.userType = result.userType; // Set userType if needed
        localStorage.setItem('userType', this.userType || '');
      }
    });
  }

  openRegisterDialog(): void {
    this.dialog.open(RegisterComponent, {
      width: '400px',
      disableClose: true,
    });
  }
}
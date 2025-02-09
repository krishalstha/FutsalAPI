import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FutsalDetailService } from '../shared/futsal-detail.service';
import { FutsalDetail } from '../shared/futsal-detail';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthService } from '../shared/auth.service'; 


@Component({
  selector: 'app-futsal',
  imports: [CommonModule],
  templateUrl: './futsal.component.html',
  styleUrl: './futsal.css'
})
export class FutsalComponent implements OnInit {
  futsalDetails: FutsalDetail[] = [];
  isLoggedIn: boolean = false;

  constructor(
    private futsalDetailService: FutsalDetailService,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService,
   
  ) {}
  ngOnInit(): void {
    // Check if the user is logged in
    this.authService.isLoggedIn().subscribe((status) => {
      this.isLoggedIn = status;
   
    });
    // Call the service to fetch futsal details when the component is initialized
    this.futsalDetailService.getFutsalDetails().subscribe(
      (data) => {
        this.futsalDetails = data; // Store the fetched data
      },
      (error) => {
        console.error('Error fetching futsal details:', error);
      }
    );
  }
  openLoginDialog(): void {
    this.dialog.open(LoginComponent, {
      width: '400px',
      disableClose: false, // Prevent closing by clicking outside
    });
  }
  openSignupDialog(): void {
    this.dialog.open(RegisterComponent, {
      width: '400px',
      disableClose: false, // Prevent closing by clicking outside
    });
  }

  goToBooking(futsal: FutsalDetail): void {
    if (this.isLoggedIn) {
      this.router.navigate(['/bookingscreen', futsal.futsalName], {
        queryParams: {
          location: futsal.location,
          contactNumber: futsal.contactNumber,
          pricing: futsal.pricing,
          operationHours: futsal.operationHours,
          email: futsal.email,
          description: futsal.description
        }
      });
    } else {
      alert('Please login to book a futsal ground!');
    }
  }

  logout(): void {  
    this.authService.logout(); // Logout user
    this.isLoggedIn = false;  // Update UI
  }
}
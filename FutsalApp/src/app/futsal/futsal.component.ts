
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FutsalDetailService } from '../shared/futsal-detail.service';
import { FutsalDetail } from '../shared/futsal-detail';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-futsal',
  imports: [HomeComponent,CommonModule],
  templateUrl: './futsal.component.html',
  styleUrl: './futsal.css'
})
export class FutsalComponent implements OnInit {
  futsalDetails: FutsalDetail[] = [];

  constructor(private futsalDetailService: FutsalDetailService,
    private router: Router
  ) {}

  ngOnInit(): void {
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
  goToBooking(futsal: FutsalDetail): void {
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
  }
}
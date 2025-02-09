import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  navigateToFutsal(): void {
    this.router.navigate(['/futsal']);
  }
  
}

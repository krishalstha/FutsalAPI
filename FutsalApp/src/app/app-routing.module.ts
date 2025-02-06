import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FutsalDetailFormComponent } from './FutsalDetails/futsal-detail-form/futsal-detail-form.component';

const routes: Routes = [
  // Redirect to 'home' if the path is empty
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Public Routes
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  // Admin Route (add guard if needed for protection)
  { path: 'adminpage', component: FutsalDetailFormComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

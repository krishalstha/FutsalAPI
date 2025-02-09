import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Example component
import { AboutusComponent } from './aboutus/aboutus.component';  // Example component
import { FutsalComponent } from './futsal/futsal.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forget/forget.component';
import { FutsalDetailFormComponent } from './FutsalDetails/futsal-detail-form/futsal-detail-form.component';
import { FutsalDetailsComponent } from './futsal-details/futsal-details.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { FutsalPageComponent } from './futsal-page/futsal-page.component';



export const routes: Routes = [
  { path: 'home', component: HomeComponent },  // Default route
  { path: 'register', component: RegisterComponent }, // Route for register page
  { path: 'futsaldetail', component: FutsalDetailFormComponent },
  { path: 'futsalpage', component: FutsalPageComponent},
  { path: 'futsaldetailcomponent', component: FutsalDetailsComponent},
  { path:'futsaldetailscomponent', component: FutsalDetailsComponent },
  { path: 'futsal', component: FutsalComponent},
  { path: 'bookingscreen/:futsalName', component: BookingDetailsComponent },
  { path: 'aboutus', component: AboutusComponent},
  { path: 'contactus', component: ContactusComponent},
  {path: 'contactus', component: ContactusComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent},
  { path: 'forget', component: ForgotPasswordComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

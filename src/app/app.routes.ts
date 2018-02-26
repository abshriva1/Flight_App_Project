


import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightsComponent } from './flights/flights.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AirlineTypeResolveService } from './services/airline-service.resolve';
import { AuthGuardComponent } from './services/auth-guard.service';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';




export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flights', component:FlightsComponent,
    canActivate: [AuthGuardComponent],
    canDeactivate: [CanDeactivateGuard],
    resolve: { airlineType : AirlineTypeResolveService }},
  { path: 'flightList', component: FlightDetailsComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' },
  { path:'not-found',component:NotFoundComponent},
  
];

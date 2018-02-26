//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


//Routes
import { ROUTES } from './app.routes';

//Services
import { FlightService } from './services/flight-service';
import { AuthService } from './auth/auth.service';
import { AirlineDropDownService } from './services/airline-service';
import { AirlineTypeResolveService } from './services/airline-service.resolve';
import { AuthGuardComponent } from './services/auth-guard.service';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';


//Components

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';

//Pipes
import { CapitalizePipe } from './pipes/capitalize-pipe';
import { SearchPipe } from './pipes/search-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    CallbackComponent,
    FlightsComponent,
    FlightFormComponent,
    FlightDetailsComponent,
    NavComponent,
    NotFoundComponent,
    CapitalizePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService,
              FlightService,
              AirlineDropDownService,
              AirlineTypeResolveService,
              AuthGuardComponent,
              CanDeactivateGuard
               ],
  bootstrap: [AppComponent]
})
export class AppModule { }

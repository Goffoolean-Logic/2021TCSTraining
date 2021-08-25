import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { PortfoliocomponentComponent } from './portfoliocomponent/portfoliocomponent.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SignupcomponentComponent,
    LogincomponentComponent,
    PortfoliocomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

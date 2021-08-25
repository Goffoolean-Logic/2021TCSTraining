import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { PortfoliocomponentComponent } from './portfoliocomponent/portfoliocomponent.component';
import { SignupcomponentComponent } from './signupcomponent/signupcomponent.component';

const routes: Routes = [
  {path: '', component: SignupcomponentComponent},
  {path: 'Login', component: LogincomponentComponent},
  {path: 'Portfolio', component: PortfoliocomponentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

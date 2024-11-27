import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserDataComponent } from './pages/user-data/user-data.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-data', component: UserDataComponent },
  { path: 'error-page', component: ErrorPageComponent },
  { path: 'calculator', component: CalculatorComponent },
];

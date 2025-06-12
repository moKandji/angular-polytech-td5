import { Routes } from '@angular/router';
import { ViewAirFranceComponent } from './components/view-airfrance/view-airfrance.component';

export const routes: Routes = [
  {
    path: 'decollages',
    component: ViewAirFranceComponent,
    data: { type: 'departure' }
  },
  {
    path: 'atterrissages',
    component: ViewAirFranceComponent,
    data: { type: 'arrival' }
  },
  {
    path: '', redirectTo: 'decollages', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'decollages'
  }
];

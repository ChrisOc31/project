import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SpaceInvadersComponent } from './pages/space-invaders/space-invaders.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'space-invaders', component: SpaceInvadersComponent },
];


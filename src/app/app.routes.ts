import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SpaceInvadersComponent } from './pages/space-invaders/space-invaders.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { Kp21CssComponent } from './pages/kp21-css/kp21-css.component';
import { PlayGroundComponent } from './pages/play-ground/play-ground.component';
import { AbletonCopyComponent } from './pages/ableton-copy/ableton-copy.component';
import { TaskTrackerComponent } from './pages/task-tracker/task-tracker.component';
import { LibraryComponent } from './pages/library/library.component';
import { PairGameComponent } from './pages/pair-game/pair-game.component';
import { MovieGalleryComponent } from './pages/movie-gallery/movie-gallery.component';
import { KpLandingPageComponent } from './pages/kp-landing-page/kp-landing-page.component';
import { ResponsiveSiteComponent } from './pages/responsive-site/responsive-site.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'space-invaders', component: SpaceInvadersComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'kp', component: Kp21CssComponent },
  { path: 'play', component: PlayGroundComponent },
  { path: 'ableton', component: AbletonCopyComponent },
  { path: 'tracker', component: TaskTrackerComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'pairs', component: PairGameComponent },
  { path: 'gallery', component: MovieGalleryComponent },
  { path: 'landingPageKP', component: KpLandingPageComponent },
  { path: 'rs', component: ResponsiveSiteComponent },
  
  
];


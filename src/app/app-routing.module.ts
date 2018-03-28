import { TvShowEpisodesComponent } from './containers/tv-show-episodes/tv-show-episodes.component';
import { TvGenresComponent } from './containers/tv-genres/tv-genres.component';
import { TVDetailsComponent } from './components/tv-details/tv-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './components/details/details.component';
import { GenresComponent } from './containers/genres/genres.component';
import { HomeComponent } from './containers/home/home.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { DiscoverComponent } from './containers/discover/discover.component';
import { SearchComponent } from './containers/search/search.component';
import { TopRatedComponent } from './containers/top-rated/top-rated.component';
import { NowPlayingComponent } from './containers/now-playing/now-playing.component';
import { UpcomingComponent } from './containers/upcoming/upcoming.component';

const baseTitle = 'Movie Finder';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'discover/:moviePage/:tvShowPage',
    pathMatch: 'full',
    component: DiscoverComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'top-rated/:moviePage/:tvShowPage',
    pathMatch: 'full',
    component: TopRatedComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'search',
    pathMatch: 'full',
    component: SearchComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'search/:phrase/:moviePage/:tvShowPage',
    pathMatch: 'full',
    component: SearchComponent,
    data: {
      pageTitle: `Eredmény ::  ${baseTitle}`
    }
  },
  {
    path: 'genres/:id/:page',
    pathMatch: 'full',
    component: GenresComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'tv-genres/:id/:page',
    pathMatch: 'full',
    component: TvGenresComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'details/:id',
    pathMatch: 'full',
    component: DetailsComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'tv-details/:id',
    pathMatch: 'full',
    component: TVDetailsComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'tv-show-episodes/:id/:season',
    pathMatch: 'full',
    component: TvShowEpisodesComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'now-playing/:page',
    pathMatch: 'full',
    component: NowPlayingComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'upcoming/:page',
    pathMatch: 'full',
    component: UpcomingComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

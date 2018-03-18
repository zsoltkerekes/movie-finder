import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './components/details/details.component';
import { GenresComponent } from './containers/genres/genres.component';
import { HomeComponent } from './containers/home/home.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { PopularComponent } from './containers/popular/popular.component';
import { SearchComponent } from './containers/search/search.component';
import { TopRatedComponent } from './containers/top-rated/top-rated.component';

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
    path: 'popular',
    pathMatch: 'full',
    component: PopularComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'top-rated',
    pathMatch: 'full',
    component: TopRatedComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'search',
    pathMatch: 'full',
    component : SearchComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'search/:phrase/:page',
    component : SearchComponent,
    data: {
      pageTitle: `Eredmény ::  ${baseTitle}`
    }
  },
  {
    path: 'genres/:id',
    component : GenresComponent,
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'details/:id',
    component : DetailsComponent,
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

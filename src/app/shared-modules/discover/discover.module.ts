import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from '../core/core.module';

import {DiscoverComponent} from '../../containers/discover/discover.component';
import {DiscoverOptionsComponent} from '../../components/movie/discover-options/discover-options.component';
import {PopularMoviesComponent} from '../../components/movie/popular-movies/popular-movies.component';
import {DiscoverTvOptionsComponent} from '../../components/tv/discover-tv-options/discover-tv-options.component';
import {PopularTvShowsComponent} from '../../components/tv/popular-tv-shows/popular-tv-shows.component';
import {PopularPersonsComponent} from '../../components/person/popular-persons/popular-persons.component';

const routes: Routes = [
  {
    path: ':moviePage/:tvShowPage/:personPage',
    component: DiscoverComponent
  },
  {
    path: ':moviePage/:tvShowPage/:personPage/:sortMovieBy/:movieYear/:withGenres/:sortTvShowBy/:tvShowYear/:tvWithGenres',
    component: DiscoverComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DiscoverComponent,
    DiscoverOptionsComponent,
    PopularMoviesComponent,
    DiscoverTvOptionsComponent,
    PopularTvShowsComponent,
    PopularPersonsComponent
  ],
  exports: [
    DiscoverComponent,
    DiscoverOptionsComponent,
    PopularMoviesComponent,
    DiscoverTvOptionsComponent,
    PopularTvShowsComponent,
    PopularPersonsComponent
  ]
})
export class DiscoverModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';

import { TopRatedComponent } from '../../containers/top-rated/top-rated.component';
import { TopRatedMoviesComponent } from '../../components/movie/top-rated-movies/top-rated-movies.component';
import { TopRatedTvShowsComponent } from '../../components/tv/top-rated-tv-shows/top-rated-tv-shows.component';
import { TopRatedPersonsComponent } from '../../components/person/top-rated-persons/top-rated-persons.component';

const routes: Routes = [
  {
    path: ':moviePage/:tvShowPage/:personPage',
    component: TopRatedComponent,
  },
];

@NgModule({
  imports: [CommonModule, CoreModule, RouterModule.forChild(routes)],
  declarations: [
    TopRatedComponent,
    TopRatedMoviesComponent,
    TopRatedTvShowsComponent,
    TopRatedPersonsComponent,
  ],
  exports: [
    TopRatedComponent,
    TopRatedMoviesComponent,
    TopRatedTvShowsComponent,
    TopRatedPersonsComponent,
  ],
})
export class TopRatedModule {}

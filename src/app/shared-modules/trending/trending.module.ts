import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';

import { TrendingComponent } from '../../containers/trending/trending.component';
import { TrendingMoviesComponent } from '../../components/movie/trending-movies/trending-movies.component';
import { TrendingTvShowComponent } from '../../components/tv/trending-tv-shows/trending-tv-shows.component';

const routes: Routes = [
  {
    path: ':moviePage/:tvShowPage/:personPage',
    component: TrendingComponent,
  },
];

@NgModule({
  imports: [CommonModule, CoreModule, RouterModule.forChild(routes)],
  declarations: [
    TrendingComponent,
    TrendingMoviesComponent,
    TrendingTvShowComponent,
  ],
  exports: [
    TrendingComponent,
    TrendingMoviesComponent,
    TrendingTvShowComponent,
  ],
})
export class TrendingModule {}

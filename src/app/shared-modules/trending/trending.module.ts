import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';

import { TrendingComponent } from '../../containers/trending/trending.component';
import { TrendingMoviesComponent } from '../../components/movie/trending-movies/trending-movies.component';

const routes: Routes = [
  {
    path: ':moviePage',
    component: TrendingComponent,
  },
];

@NgModule({
  imports: [CommonModule, CoreModule, RouterModule.forChild(routes)],
  declarations: [TrendingComponent, TrendingMoviesComponent],
  exports: [TrendingComponent, TrendingMoviesComponent],
})
export class TrendingModule {}

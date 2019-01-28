import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from '../core/core.module';

import {DetailsComponent} from '../../containers/details/details.component';
import {MovieDetailsComponent} from '../../components/movie/movie-details/movie-details.component';
import {MovieImagesComponent} from '../../components/movie/movie-images/movie-images.component';
import {MovieVideosComponent} from '../../components/movie/movie-videos/movie-videos.component';
import {MovieReviewsComponent} from '../../components/movie/movie-reviews/movie-reviews.component';
import {MovieCreditsComponent} from '../../components/movie/movie-credits/movie-credits.component';
import {RecommendedMoviesComponent} from '../../components/movie/recommended-movies/recommended-movies.component';
import {SimilarMoviesComponent} from '../../components/movie/similar-movies/similar-movies.component';
import {MovieKeywordsComponent} from '../../components/movie/movie-keywords/movie-keywords.component';


const routes: Routes = [
  {
    path: ':id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DetailsComponent,
    MovieDetailsComponent,
    MovieImagesComponent,
    MovieVideosComponent,
    MovieReviewsComponent,
    MovieCreditsComponent,
    RecommendedMoviesComponent,
    SimilarMoviesComponent,
    MovieKeywordsComponent
  ],
  exports: [
    DetailsComponent,
    MovieDetailsComponent,
    MovieImagesComponent,
    MovieVideosComponent,
    MovieReviewsComponent,
    MovieCreditsComponent,
    RecommendedMoviesComponent,
    SimilarMoviesComponent,
    MovieKeywordsComponent
  ]
})
export class DetailsModule { }

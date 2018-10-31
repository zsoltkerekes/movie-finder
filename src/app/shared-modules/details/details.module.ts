import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../core/core.module";

import {DetailsComponent} from "../../containers/details/details.component";
import {MovieDetailsComponent} from "../../components/movie-details/movie-details.component";
import {MovieImagesComponent} from "../../components/movie-images/movie-images.component";
import {MovieVideosComponent} from "../../components/movie-videos/movie-videos.component";
import {MovieReviewsComponent} from "../../components/movie-reviews/movie-reviews.component";
import {MovieCreditsComponent} from "../../components/movie-credits/movie-credits.component";
import {RecommendedMoviesComponent} from "../../components/recommended-movies/recommended-movies.component";
import {SimilarMoviesComponent} from "../../components/similar-movies/similar-movies.component";
import {MovieKeywordsComponent} from "../../components/movie-keywords/movie-keywords.component";


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

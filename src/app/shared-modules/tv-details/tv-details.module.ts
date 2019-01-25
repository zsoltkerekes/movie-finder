import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from '../core/core.module';

import {TVDetailsComponent} from '../../containers/tv-details/tv-details.component';
import {TvShowDetailsComponent} from '../../components/tv-show-details/tv-show-details.component';
import {TvImagesComponent} from '../../components/tv-images/tv-images.component';
import {TvShowVideosComponent} from '../../components/tv-show-videos/tv-show-videos.component';
import {TvShowReviewsComponent} from '../../components/tv-show-reviews/tv-show-reviews.component';
import {TvShowSeasonsComponent} from '../../components/tv-show-seasons/tv-show-seasons.component';
import {TvShowCreditsComponent} from '../../components/tv-show-credits/tv-show-credits.component';
import {RecommendedTvShowsComponent} from '../../components/recommended-tv-shows/recommended-tv-shows.component';
import {SimilarTvShowsComponent} from '../../components/similar-tv-shows/similar-tv-shows.component';
import {TvKeywordsComponent} from '../../components/tv-keywords/tv-keywords.component';

const routes: Routes = [
  {
    path: ':id',
    component: TVDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TVDetailsComponent,
    TvShowDetailsComponent,
    TvImagesComponent,
    TvShowVideosComponent,
    TvShowReviewsComponent,
    TvShowSeasonsComponent,
    TvShowCreditsComponent,
    RecommendedTvShowsComponent,
    SimilarTvShowsComponent,
    TvKeywordsComponent
  ],
  exports: [
    TVDetailsComponent,
    TVDetailsComponent,
    TvShowDetailsComponent,
    TvImagesComponent,
    TvShowVideosComponent,
    TvShowReviewsComponent,
    TvShowSeasonsComponent,
    TvShowCreditsComponent,
    RecommendedTvShowsComponent,
    SimilarTvShowsComponent,
    TvKeywordsComponent
  ]
})
export class TvDetailsModule { }

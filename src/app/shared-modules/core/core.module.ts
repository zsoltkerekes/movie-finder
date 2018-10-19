import {PersonTaggedImagesComponent} from '../../components/person-tagged-images/person-tagged-images.component';
import {TvShowReviewsComponent} from '../../components/tv-show-reviews/tv-show-reviews.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from '../../app-routing.module';
import {DiscoverOptionsComponent} from '../../components/discover-options/discover-options.component';
import {DiscoverTvOptionsComponent} from '../../components/discover-tv-options/discover-tv-options.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {ListItemComponent} from '../../components/list-item/list-item.component';
import {MovieCreditsComponent} from '../../components/movie-credits/movie-credits.component';
import {MovieImagesComponent} from '../../components/movie-images/movie-images.component';
import {MovieReviewsComponent} from '../../components/movie-reviews/movie-reviews.component';
import {MovieVideosComponent} from '../../components/movie-videos/movie-videos.component';
import {MoviesByGenreComponent} from '../../components/movies-by-genre/movies-by-genre.component';
import {MoviesNowPlayingComponent} from '../../components/movies-now-playing/movies-now-playing.component';
import {PaginationComponent} from '../../components/pagination/pagination.component';
import {PersonImagesComponent} from '../../components/person-images/person-images.component';
import {PersonMovieCreditsComponent} from '../../components/person-movie-credits/person-movie-credits.component';
import {PersonTvCreditsComponent} from '../../components/person-tv-credits/person-tv-credits.component';
import {PopularMoviesComponent} from '../../components/popular-movies/popular-movies.component';
import {PopularPersonsComponent} from '../../components/popular-persons/popular-persons.component';
import {PopularTvShowsComponent} from '../../components/popular-tv-shows/popular-tv-shows.component';
import {RecommendedMoviesComponent} from '../../components/recommended-movies/recommended-movies.component';
import {RecommendedTvShowsComponent} from '../../components/recommended-tv-shows/recommended-tv-shows.component';
import {RecommendedComponent} from '../../components/recommended/recommended.component';
import {SearchByPhraseComponent} from '../../components/search-by-phrase/search-by-phrase.component';
import {SearchResultsComponent} from '../../components/search-results/search-results.component';
import {SimilarMoviesComponent} from '../../components/similar-movies/similar-movies.component';
import {SimilarTvShowsComponent} from '../../components/similar-tv-shows/similar-tv-shows.component';
import {TopRatedMoviesComponent} from '../../components/top-rated-movies/top-rated-movies.component';
import {TopRatedTvShowsComponent} from '../../components/top-rated-tv-shows/top-rated-tv-shows.component';
import {TvImagesComponent} from '../../components/tv-images/tv-images.component';
import {TvRecommendedComponent} from '../../components/tv-recommended/tv-recommended.component';
import {TvShowCreditsComponent} from '../../components/tv-show-credits/tv-show-credits.component';
import {TvShowEpisodesDetailsComponent} from '../../components/tv-show-episodes-details/tv-show-episodes-details.component';
import {TvShowSeasonVideosComponent} from '../../components/tv-show-season-videos/tv-show-season-videos.component';
import {TvShowSeasonsComponent} from '../../components/tv-show-seasons/tv-show-seasons.component';
import {TvShowVideosComponent} from '../../components/tv-show-videos/tv-show-videos.component';
import {TvShowsByGenreComponent} from '../../components/tv-shows-by-genre/tv-shows-by-genre.component';
import {UpcomingMoviesComponent} from '../../components/upcoming-movies/upcoming-movies.component';
import {DetailsComponent} from '../../containers/details/details.component';
import {DiscoverComponent} from '../../containers/discover/discover.component';
import {GenresComponent} from '../../containers/genres/genres.component';
import {HomeComponent} from '../../containers/home/home.component';
import {NowPlayingComponent} from '../../containers/now-playing/now-playing.component';
import {PageNotFoundComponent} from '../../containers/page-not-found/page-not-found.component';
import {PersonDetailsComponent} from '../../containers/person-details/person-details.component';
import {SearchComponent} from '../../containers/search/search.component';
import {TopRatedComponent} from '../../containers/top-rated/top-rated.component';
import {TVDetailsComponent} from '../../containers/tv-details/tv-details.component';
import {TvGenresComponent} from '../../containers/tv-genres/tv-genres.component';
import {TvShowEpisodesComponent} from '../../containers/tv-show-episodes/tv-show-episodes.component';
import {UpcomingComponent} from '../../containers/upcoming/upcoming.component';
import {MaterialModule} from '../material/material.module';
import {TopRatedPersonsComponent} from '../../components/top-rated-persons/top-rated-persons.component';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from '../../pipes/search.pipe';
import {LazyLoadImagesModule} from 'ngx-lazy-load-images';
import {SideScrollDirective} from '../../directives/side-scroll.directive';
import {MovieKeywordsComponent} from '../../components/movie-keywords/movie-keywords.component';
import {TvKeywordsComponent} from '../../components/tv-keywords/tv-keywords.component';
import {ByKeywordsComponent} from '../../containers/by-keywords/by-keywords.component';
import {MoviesByKeywordComponent} from '../../components/movies-by-keyword/movies-by-keyword.component';
import {MovieDetailsComponent} from '../../components/movie-details/movie-details.component';
import {TvShowDetailsComponent} from '../../components/tv-show-details/tv-show-details.component';
import {PersonsDetailsComponent} from '../../components/person-details/person-details.component';
import {LoadingComponent} from '../../components/loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    LazyLoadImagesModule
  ],
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    PopularMoviesComponent,
    DiscoverComponent,
    RecommendedComponent,
    GenresComponent,
    TopRatedComponent,
    TopRatedMoviesComponent,
    MoviesByGenreComponent,
    SearchComponent,
    SearchByPhraseComponent,
    ListItemComponent,
    SearchResultsComponent,
    RecommendedMoviesComponent,
    PaginationComponent,
    MoviesNowPlayingComponent,
    NowPlayingComponent,
    UpcomingComponent,
    UpcomingMoviesComponent,
    TVDetailsComponent,
    RecommendedTvShowsComponent,
    PopularTvShowsComponent,
    TopRatedTvShowsComponent,
    TvRecommendedComponent,
    TvGenresComponent,
    TvShowsByGenreComponent,
    DiscoverOptionsComponent,
    DiscoverTvOptionsComponent,
    SimilarMoviesComponent,
    SimilarTvShowsComponent,
    TvShowSeasonsComponent,
    TvShowEpisodesComponent,
    TvShowEpisodesDetailsComponent,
    MovieImagesComponent,
    TvImagesComponent,
    MovieVideosComponent,
    TvShowVideosComponent,
    TvShowSeasonVideosComponent,
    PersonDetailsComponent,
    PersonMovieCreditsComponent,
    PersonTvCreditsComponent,
    PersonImagesComponent,
    MovieCreditsComponent,
    TvShowCreditsComponent,
    PopularPersonsComponent,
    MovieReviewsComponent,
    TvShowReviewsComponent,
    TopRatedPersonsComponent,
    MovieKeywordsComponent,
    MoviesByKeywordComponent,
    TvKeywordsComponent,
    ByKeywordsComponent,
    SearchPipe,
    PersonTaggedImagesComponent,
    SideScrollDirective,
    MovieDetailsComponent,
    TvShowDetailsComponent,
    PersonsDetailsComponent,
    LoadingComponent
  ],
  exports: [
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    PopularMoviesComponent,
    DiscoverComponent,
    RecommendedComponent,
    GenresComponent,
    TopRatedComponent,
    TopRatedMoviesComponent,
    MoviesByGenreComponent,
    SearchComponent,
    SearchByPhraseComponent,
    ListItemComponent,
    SearchResultsComponent,
    RecommendedMoviesComponent,
    PaginationComponent,
    MoviesNowPlayingComponent,
    NowPlayingComponent,
    UpcomingComponent,
    UpcomingMoviesComponent,
    TVDetailsComponent,
    RecommendedTvShowsComponent,
    PopularTvShowsComponent,
    TopRatedTvShowsComponent,
    TvRecommendedComponent,
    TvGenresComponent,
    TvShowsByGenreComponent,
    DiscoverOptionsComponent,
    DiscoverTvOptionsComponent,
    SimilarMoviesComponent,
    SimilarTvShowsComponent,
    TvShowSeasonsComponent,
    TvShowEpisodesComponent,
    TvShowEpisodesDetailsComponent,
    MovieImagesComponent,
    TvImagesComponent,
    MovieVideosComponent,
    TvShowVideosComponent,
    TvShowSeasonVideosComponent,
    PersonDetailsComponent,
    PersonMovieCreditsComponent,
    PersonTvCreditsComponent,
    PersonImagesComponent,
    MovieCreditsComponent,
    TvShowCreditsComponent,
    PopularPersonsComponent,
    MovieReviewsComponent,
    TvShowReviewsComponent,
    TopRatedPersonsComponent,
    SearchPipe,
    PersonsDetailsComponent
  ]
})
export class CoreModule {
}

import { TvShowsByGenreComponent } from './components/tv-shows-by-genre/tv-shows-by-genre.component';
import { TvGenresComponent } from './containers/tv-genres/tv-genres.component';
import { TopRatedTvShowsComponent } from './components/top-rated-tv-shows/top-rated-tv-shows.component';
import { PopularTvShowsComponent } from './components/popular-tv-shows/popular-tv-shows.component';
import { RecommendedTvShowsComponent } from './components/recommended-tv-shows/recommended-tv-shows.component';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './containers/home/home.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { ApiService } from './services/api.service';
import { ConstantsService } from './services/constants.service';
import { MaterialModule } from './shared-modules/material/material.module';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { PopularComponent } from './containers/popular/popular.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { GenresComponent } from './containers/genres/genres.component';
import { TopRatedComponent } from './containers/top-rated/top-rated.component';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { MoviesByGenreComponent } from './components/movies-by-genre/movies-by-genre.component';
import { SearchComponent } from './containers/search/search.component';
import { SearchByPhraseComponent } from './components/search-by-phrase/search-by-phrase.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { RecommendedMoviesComponent } from './components/recommended-movies/recommended-movies.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MoviesNowPlayingComponent } from './components/movies-now-playing/movies-now-playing.component';
import { NowPlayingComponent } from './containers/now-playing/now-playing.component';
import { UpcomingComponent } from './containers/upcoming/upcoming.component';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { CookieService } from 'ngx-cookie-service';
import { TVDetailsComponent } from './components/tv-details/tv-details.component';
import { TvRecommendedComponent } from './components/tv-recommended/tv-recommended.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    PopularMoviesComponent,
    PopularComponent,
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
    TvShowsByGenreComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    ServiceWorkerModule.register('/movie-finder/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ConstantsService,
    ApiService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

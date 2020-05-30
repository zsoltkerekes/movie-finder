import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CookieService } from 'ngx-cookie-service';
import { ScrollerService } from './services/scroller.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { ConstantsService } from './services/constants.service';
import { CoreModule } from './shared-modules/core/core.module';
import { HomeModule } from './shared-modules/home/home.module';
import { GenresModule } from './shared-modules/genres/genres.module';
import { DiscoverModule } from './shared-modules/discover/discover.module';
import { TopRatedModule } from './shared-modules/top-rated/top-rated.module';
import { SearchModule } from './shared-modules/search/search.module';
import { TvGenresModule } from './shared-modules/tv-genres/tv-genres.module';
import { DetailsModule } from './shared-modules/details/details.module';
import { TvDetailsModule } from './shared-modules/tv-details/tv-details.module';
import { PersonDetailsModule } from './shared-modules/person-details/person-details.module';
import { TvShowEpisodesModule } from './shared-modules/tv-show-episodes/tv-show-episodes.module';
import { NowPlayingModule } from './shared-modules/now-playing/now-playing.module';
import { UpcomingModule } from './shared-modules/upcoming/upcoming.module';
import { ByKeywordsModule } from './shared-modules/by-keywords/by-keywords.module';
import { PageNotFoundModule } from './shared-modules/page-not-found/page-not-found.module';
import { ObservablesService } from './services/observables.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/movie-finder/ngsw-worker.js', {
      enabled: environment.production,
    }),
    CoreModule,
    HomeModule,
    GenresModule,
    DiscoverModule,
    TopRatedModule,
    SearchModule,
    TvGenresModule,
    DetailsModule,
    TvDetailsModule,
    PersonDetailsModule,
    TvShowEpisodesModule,
    NowPlayingModule,
    UpcomingModule,
    ByKeywordsModule,
    PageNotFoundModule,
  ],
  providers: [
    ObservablesService,
    ConstantsService,
    ApiService,
    CookieService,
    ScrollerService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

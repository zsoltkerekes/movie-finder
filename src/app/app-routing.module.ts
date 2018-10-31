import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const baseTitle = 'Movie Finder';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './shared-modules/home/home.module#HomeModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'discover',
    loadChildren: './shared-modules/discover/discover.module#DiscoverModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'top-rated',
    loadChildren: './shared-modules/top-rated/top-rated.module#TopRatedModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'search',
    loadChildren: './shared-modules/search/search.module#SearchModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'genres',
    loadChildren: './shared-modules/genres/genres.module#GenresModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'tv-genres',
    loadChildren: './shared-modules/tv-genres/tv-genres.module#TvGenresModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'details',
    loadChildren: './shared-modules/details/details.module#DetailsModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'tv-details',
    loadChildren: './shared-modules/tv-details/tv-details.module#TvDetailsModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'person-details',
    loadChildren: './shared-modules/person-details/person-details.module#PersonDetailsModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'tv-show-episodes',
    loadChildren: './shared-modules/tv-show-episodes/tv-show-episodes.module#TvShowEpisodesModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'now-playing',
    loadChildren: './shared-modules/now-playing/now-playing.module#NowPlayingModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'upcoming',
    loadChildren: './shared-modules/upcoming/upcoming.module#UpcomingModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: 'by-keywords',
    loadChildren: './shared-modules/by-keywords/by-keywords.module#ByKeywordsModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {
    path: '404',
    loadChildren: './shared-modules/page-not-found/page-not-found.module#PageNotFoundModule',
    data: {
      pageTitle: `${baseTitle}`
    }
  },
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

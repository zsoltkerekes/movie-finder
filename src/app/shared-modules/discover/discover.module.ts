import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../core/core.module";

import {DiscoverComponent} from "../../containers/discover/discover.component";
import {DiscoverOptionsComponent} from "../../components/discover-options/discover-options.component";
import {PopularMoviesComponent} from "../../components/popular-movies/popular-movies.component";
import {DiscoverTvOptionsComponent} from "../../components/discover-tv-options/discover-tv-options.component";
import {PopularTvShowsComponent} from "../../components/popular-tv-shows/popular-tv-shows.component";
import {PopularPersonsComponent} from "../../components/popular-persons/popular-persons.component";

const routes: Routes = [
  {
    path: ':moviePage/:tvShowPage/:personPage',
    component: DiscoverComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DiscoverComponent,
    DiscoverOptionsComponent,
    PopularMoviesComponent,
    DiscoverTvOptionsComponent,
    PopularTvShowsComponent,
    PopularPersonsComponent
  ],
  exports: [
    DiscoverComponent,
    DiscoverOptionsComponent,
    PopularMoviesComponent,
    DiscoverTvOptionsComponent,
    PopularTvShowsComponent,
    PopularPersonsComponent
  ]
})
export class DiscoverModule { }

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../core/core.module";

import {TvShowEpisodesComponent} from "../../containers/tv-show-episodes/tv-show-episodes.component";
import {TvShowEpisodesDetailsComponent} from "../../components/tv-show-episodes-details/tv-show-episodes-details.component";
import {TvShowSeasonVideosComponent} from "../../components/tv-show-season-videos/tv-show-season-videos.component";

const routes: Routes = [
  {
    path: ':id/:season',
    component: TvShowEpisodesComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TvShowEpisodesComponent,
    TvShowEpisodesDetailsComponent,
    TvShowSeasonVideosComponent
  ],
  exports: [
    TvShowEpisodesComponent,
    TvShowEpisodesDetailsComponent,
    TvShowSeasonVideosComponent
  ]
})
export class TvShowEpisodesModule { }

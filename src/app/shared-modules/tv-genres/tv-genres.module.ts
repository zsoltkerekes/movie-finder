import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../core/core.module";

import {TvGenresComponent} from "../../containers/tv-genres/tv-genres.component";
import {TvShowsByGenreComponent} from "../../components/tv-shows-by-genre/tv-shows-by-genre.component";

const routes: Routes = [
  {
    path: ':id/:page',
    component: TvGenresComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TvGenresComponent,
    TvShowsByGenreComponent
  ],
  exports: [
    TvGenresComponent,
    TvShowsByGenreComponent
  ]
})
export class TvGenresModule { }

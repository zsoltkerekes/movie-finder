import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from '../core/core.module';

import {GenresComponent} from '../../containers/genres/genres.component';
import {MoviesByGenreComponent} from '../../components/movies-by-genre/movies-by-genre.component';

const routes: Routes = [
  {
    path: ':id/:page',
    component: GenresComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    GenresComponent,
    MoviesByGenreComponent
  ],
  exports: [
    GenresComponent,
    MoviesByGenreComponent
  ]
})
export class GenresModule {
}

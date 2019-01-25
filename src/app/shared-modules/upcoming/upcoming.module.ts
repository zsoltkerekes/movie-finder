import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from '../core/core.module';

import {UpcomingComponent} from '../../containers/upcoming/upcoming.component';
import {UpcomingMoviesComponent} from '../../components/upcoming-movies/upcoming-movies.component';

const routes: Routes = [
  {
    path: ':page',
    component: UpcomingComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UpcomingComponent,
    UpcomingMoviesComponent
  ],
  exports: [
    UpcomingComponent,
    UpcomingMoviesComponent
  ]
})
export class UpcomingModule { }

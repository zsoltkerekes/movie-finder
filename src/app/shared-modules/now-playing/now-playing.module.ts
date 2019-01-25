import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from '../core/core.module';

import {NowPlayingComponent} from '../../containers/now-playing/now-playing.component';
import {MoviesNowPlayingComponent} from '../../components/movies-now-playing/movies-now-playing.component';

const routes: Routes = [
  {
    path: ':page',
    component: NowPlayingComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NowPlayingComponent,
    MoviesNowPlayingComponent
  ],
  exports: [
    NowPlayingComponent,
    MoviesNowPlayingComponent
  ]
})
export class NowPlayingModule { }

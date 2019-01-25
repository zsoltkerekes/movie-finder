import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from '../core/core.module';

import {RecommendedComponent} from '../../components/recommended/recommended.component';
import {TvRecommendedComponent} from '../../components/tv-recommended/tv-recommended.component';
import {HomeComponent} from '../../containers/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    RecommendedComponent,
    TvRecommendedComponent
  ],
  exports: [
    HomeComponent,
    RecommendedComponent,
    TvRecommendedComponent
  ]
})
export class HomeModule {
}


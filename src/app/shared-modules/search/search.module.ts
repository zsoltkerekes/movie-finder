import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreModule} from '../core/core.module';

import {SearchComponent} from '../../containers/search/search.component';
import {SearchByPhraseComponent} from '../../components/search/search-by-phrase/search-by-phrase.component';
import {SearchResultsComponent} from '../../components/search/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: ':phrase/:moviePage/:tvShowPage/:personPage',
    component: SearchComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SearchComponent,
    SearchByPhraseComponent,
    SearchResultsComponent
  ],
  exports: [
    SearchComponent,
    SearchByPhraseComponent,
    SearchResultsComponent
  ]
})
export class SearchModule { }

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CoreModule} from "../core/core.module";

import {ByKeywordsComponent} from "../../containers/by-keywords/by-keywords.component";
import {MoviesByKeywordComponent} from "../../components/movies-by-keyword/movies-by-keyword.component";

const routes: Routes = [
  {
    path: ':id/:keywordsPage',
    component: ByKeywordsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ByKeywordsComponent,
    MoviesByKeywordComponent
  ],
  exports: [
    ByKeywordsComponent,
    MoviesByKeywordComponent
  ]
})
export class ByKeywordsModule { }

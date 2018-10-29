import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {RecommendedComponent} from "../../components/recommended/recommended.component";
import {TvRecommendedComponent} from "../../components/tv-recommended/tv-recommended.component";
import {HomeComponent} from "../../containers/home/home.component";

import {MaterialModule} from "../material/material.module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
    RecommendedComponent,
    TvRecommendedComponent
  ],
  exports: [
    HomeComponent,
    RecommendedComponent,
    TvRecommendedComponent,
    RouterModule
  ]
})
export class HomeModule {
}


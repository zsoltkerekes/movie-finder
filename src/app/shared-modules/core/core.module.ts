import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';
import {LazyLoadImagesModule} from 'ngx-lazy-load-images';

import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {ListItemComponent} from '../../components/list-item/list-item.component';
import {PaginationComponent} from '../../components/pagination/pagination.component';
import {SearchPipe} from '../../pipes/search.pipe';
import {SideScrollDirective} from '../../directives/side-scroll.directive';
import {LoadingComponent} from '../../components/loading/loading.component';
import {TruncatePipe} from '../../pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    LazyLoadImagesModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListItemComponent,
    PaginationComponent,
    SearchPipe,
    TruncatePipe,
    SideScrollDirective,
    LoadingComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ListItemComponent,
    PaginationComponent,
    SearchPipe,
    SideScrollDirective,
    LoadingComponent,
    RouterModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    LazyLoadImagesModule
  ]
})
export class CoreModule {
}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';
import {LazyLoadImageModule} from 'ng-lazyload-image';

import {FooterComponent} from '../../components/core/footer/footer.component';
import {HeaderComponent} from '../../components/core/header/header.component';
import {ListItemComponent} from '../../components/core/list-item/list-item.component';
import {PaginationComponent} from '../../components/core/pagination/pagination.component';
import {SearchPipe} from '../../pipes/search.pipe';
import {SideScrollDirective} from '../../directives/side-scroll.directive';
import {LoadingComponent} from '../../components/core/loading/loading.component';
import {TruncatePipe} from '../../pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    LazyLoadImageModule
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
    LazyLoadImageModule
  ]
})
export class CoreModule {
}

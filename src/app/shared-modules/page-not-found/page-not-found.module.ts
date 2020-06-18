import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { PageNotFoundComponent } from '../../containers/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [LazyLoadImageModule, RouterModule.forChild(routes)],
  declarations: [PageNotFoundComponent],
  exports: [LazyLoadImageModule, PageNotFoundComponent],
})
export class PageNotFoundModule {}

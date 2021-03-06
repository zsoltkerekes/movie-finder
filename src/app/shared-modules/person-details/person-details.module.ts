import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';

import { PersonDetailsComponent } from '../../containers/person-details/person-details.component';
import { PersonsDetailsComponent } from '../../components/person/person-details/person-details.component';
import { PersonImagesComponent } from '../../components/person/person-images/person-images.component';
import { PersonTaggedImagesComponent } from '../../components/person/person-tagged-images/person-tagged-images.component';
import { PersonMovieCreditsComponent } from '../../components/person/person-movie-credits/person-movie-credits.component';
import { PersonTvCreditsComponent } from '../../components/person/person-tv-credits/person-tv-credits.component';
import { PersonCombinedCreditsComponent } from '../../components/person/person-combined-credits/person-combined-credits.component';

const routes: Routes = [
  {
    path: ':id',
    component: PersonDetailsComponent,
  },
];

@NgModule({
  imports: [CommonModule, CoreModule, RouterModule.forChild(routes)],
  declarations: [
    PersonDetailsComponent,
    PersonsDetailsComponent,
    PersonImagesComponent,
    PersonTaggedImagesComponent,
    PersonMovieCreditsComponent,
    PersonTvCreditsComponent,
    PersonCombinedCreditsComponent,
  ],
  exports: [
    PersonDetailsComponent,
    PersonsDetailsComponent,
    PersonImagesComponent,
    PersonTaggedImagesComponent,
    PersonMovieCreditsComponent,
    PersonTvCreditsComponent,
    PersonCombinedCreditsComponent,
  ],
})
export class PersonDetailsModule {}

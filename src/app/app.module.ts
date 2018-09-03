import {NgModule} from '@angular/core';
import {ServiceWorkerModule} from '@angular/service-worker';
import {CookieService} from 'ngx-cookie-service';
import {CookieLawModule} from 'angular2-cookie-law';

import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ApiService} from './services/api.service';
import {ConstantsService} from './services/constants.service';
import {CoreModule} from './shared-modules/core/core.module';
import {ScrollerService} from './services/scroller.service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    CoreModule,
    CookieLawModule,
    ServiceWorkerModule.register('/movie-finder/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    ConstantsService,
    ApiService,
    CookieService,
    ScrollerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

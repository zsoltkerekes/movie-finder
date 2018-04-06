import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CookieService } from 'ngx-cookie-service';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { ConstantsService } from './services/constants.service';
import { CoreModule } from './shared-modules/core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    ServiceWorkerModule.register('/movie-finder/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ConstantsService,
    ApiService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

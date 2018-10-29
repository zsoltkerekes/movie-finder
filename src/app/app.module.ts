import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ServiceWorkerModule} from "@angular/service-worker";
import {CookieService} from "ngx-cookie-service";

import {environment} from "../environments/environment";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ApiService} from "./services/api.service";
import {ConstantsService} from "./services/constants.service";
import {CoreModule} from "./shared-modules/core/core.module";
import {HomeModule} from "./shared-modules/home/home.module";
import {ScrollerService} from "./services/scroller.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/movie-finder/ngsw-worker.js', {enabled: environment.production}),
    CoreModule,
    HomeModule
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

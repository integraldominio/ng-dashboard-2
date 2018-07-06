import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule, Http } from '@angular/http'; // depreciado: usado somente pelo componente translate. angular , 6 usa HttpModule, Http
// import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { HttpClientModule, HttpClient , HTTP_INTERCEPTORS } from '@angular/common/http'; // angular 6 usa HttpClientModule e HttpClient
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { rootRouterConfig } from './app.routes';
import { AppCommonModule } from './components/common/app-common.module';
import { AppComponent } from './app.component';

import { RoutePartsService } from './services/route-parts/route-parts.service';
import { NavigationService } from './services/navigation/navigation.service';
import { AuthService } from './services/auth/auth.service';

/* export function createTranslateLoader( http: Http ) {
  return new TranslateStaticLoader( http , './assets/i18n', '.json');
} */

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    /* HttpModule, */
    AppCommonModule,
/*     TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpModule]
    }), */
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  declarations: [AppComponent],
  providers: [
    RoutePartsService,
    NavigationService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

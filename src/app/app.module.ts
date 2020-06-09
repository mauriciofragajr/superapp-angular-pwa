import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuComponent } from './components/menu/menu.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

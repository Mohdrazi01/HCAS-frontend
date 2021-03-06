import { BaseService } from './../../../apsystem-api-client/src/lib/api/base-service';
import { TokenStorageService } from './core/services/Token/token-storage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import {ApiModule} from '@api';
import { environment } from '@environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpRequestResponseInterceptorService} from './core/interceptors/http-request-response-interceptor.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LayoutComponent } from './shared/layout/layout.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ApiModule.forRoot({rootUrl: environment.apiBaseUrl})
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestResponseInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

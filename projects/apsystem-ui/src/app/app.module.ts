import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ApiModule} from '@api';
import { environment } from '@environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
import {HttpRequestResposnseInterceptorProviders} from './core/interceptors/http-request-resposnse-interceptor.inteceptor';
import { LayoutComponent } from './shared/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ApiModule.forRoot({rootUrl:environment.apiBaseUrl})
  ],
  providers: [HttpRequestResposnseInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

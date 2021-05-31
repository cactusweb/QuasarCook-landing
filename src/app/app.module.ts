import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import {NgxMaskModule} from "ngx-mask";
import { ScrollingModule } from '@angular/cdk/scrolling';
// import { PasswordGenerator } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { MonitorsComponent } from './main/monitors/monitors.component';
import { SuccessesComponent } from './main/successes/successes.component';
import { SocialComponent } from './main/social/social.component';
import { FooterComponent } from './main/footer/footer.component';
import { UserAgreementComponent } from './user-agreement/user-agreement.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    NavbarComponent,
    MonitorsComponent,
    SuccessesComponent,
    SocialComponent,
    FooterComponent,
    UserAgreementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(/*options*/),
    ScrollingModule
    // PasswordGenerator,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

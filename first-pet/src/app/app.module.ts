import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './modules/main/components/not-found/not-found.component';
import { HomeComponent } from './modules/main/components/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './modules/main/components/header/header.component';
import { FooterComponent } from './modules/main/components/footer/footer.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

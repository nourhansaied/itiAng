// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http"
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { SocilaMediaComponent } from './socila-media/socila-media.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';

import { Home4Component } from './home4/home4.component';
// Pipes
import { CustomePipePipe } from './custome-pipe.pipe';
// service
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactUsComponent,
    AboutUsComponent,
    MovieListComponent,
    MovieCardComponent,
    MovieDetailsComponent,

    FooterComponent,
    SocilaMediaComponent,
    NotFoundComponent,
    Home1Component,
    Home2Component,
    CustomePipePipe,
    Home4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

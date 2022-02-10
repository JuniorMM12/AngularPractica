import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AboutComponent } from './component/about/about.component';
import { PublicationsComponent } from './component/publications/publications.component';
import { BlogComponent } from './component/blog/blog.component';
import { TestimonialesComponent } from './component/testimoniales/testimoniales.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContactHomeComponent } from './component/contact-home/contact-home.component';
import { AboutPageComponent } from './component/about-page/about-page.component';
import { HomeComponent } from './component/home/home.component';
import { PublicationsPageComponent } from './component/publications-page/publications-page.component';
import { InfoPublicationComponent } from './component/info-publication/info-publication.component';
import { BlogPageComponent } from './component/blog-page/blog-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PublicationsComponent,
    BlogComponent,
    TestimonialesComponent,
    FooterComponent,
    ContactHomeComponent,
    AboutPageComponent,
    HomeComponent,
    PublicationsPageComponent,
    InfoPublicationComponent,
    BlogPageComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

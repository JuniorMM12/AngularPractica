import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './component/about-page/about-page.component';
import { BlogPageComponent } from './component/blog-page/blog-page.component';
import { HomeComponent } from './component/home/home.component';
import { InfoPublicationComponent } from './component/info-publication/info-publication.component';
import { PublicationsPageComponent } from './component/publications-page/publications-page.component';

const ROUTES: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutPageComponent},
  {path: 'publications', component: PublicationsPageComponent},
  {path:'blog-page', component: BlogPageComponent},
  {path: 'infopublications/:id', component: InfoPublicationComponent},
  {path:'**', pathMatch:'full', redirectTo: 'home'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

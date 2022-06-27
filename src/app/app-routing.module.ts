import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthGuard } from './auth.guard';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'movieList', pathMatch: 'full'
  },
  {
    path: 'movieList', component: MovieListComponent,
    children: [

      { path: "c-2", component: Home2Component }

    ]

  },
  { path: "c-1", component: Home1Component },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "profile",
    loadChildren: () => import("./profile/profile.module").then(m => m.ProfileModule)
  },
  { path: "movieDetails/:btee5/:movieName", canActivate: [AuthGuard] , component: MovieDetailsComponent},
  { path: 'about', canActivate: [AuthGuard] ,component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },










  { path: '**', component: NotFoundComponent },


];

// http://localhost:4200/movieDetails?asdas=123123
// http://localhost:4200/movieDetails/123123

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

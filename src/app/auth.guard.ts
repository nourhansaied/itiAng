import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieListService } from './movie-list.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    let id = this._movieList.getMovieId().getValue()
    console.log(id);
    if (id) {
      return true
    } else {
      // this._router.navigate(['/'])
      return false
    }


  }
  constructor(private _movieList: MovieListService, private _router : Router) {

  }

}

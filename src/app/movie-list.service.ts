import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  movieId = new BehaviorSubject(0)

  constructor(private httpClient: HttpClient) {
    let id = JSON.parse(localStorage.getItem("movieId")!)
    console.log(id);
    if (id) {
      this.movieId.next(id)
    }

  }

  getMovies(type: string): Observable<any> {
    this.httpClient.post("url", {id:"asdjkh"})
    return this.httpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=12c60ebcfd69628d440fc168fba500f7`)

  }
  setMovieID(id: number) {
    console.log(id);

    this.movieId.next(id)
  }

  getMovieId() {
    return this.movieId
  }
}

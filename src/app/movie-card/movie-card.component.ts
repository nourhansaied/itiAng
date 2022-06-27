import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MovieListService } from '../movie-list.service';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  baseURL: string = 'https://image.tmdb.org/t/p/w500/'
  @Input() movieData: any
  @Output() movieID = new EventEmitter<number>();
  title = "hello from the other side ";

  currentCounter:any
// dependancy injection
  constructor(private _wishService : WishListService,  private _router: Router, private movieList: MovieListService ) {

    this._wishService.getCounter().subscribe(
      (res: any) => {
        this.currentCounter = res
      },
      (err: any) => {
        console.log("asdasdas");

      },
      () =>{console.log("complete");
      }

    )
  }

  ngOnInit(): void {
  }


  addCart(id: number) {
    // this.movieID.emit(id)
    // console.log(id);
    this._wishService.setNewCounter(this.currentCounter + 1)

  }

  navigateToDetails() {
    this.movieList.setMovieID(this.movieData.id)
    localStorage.setItem("movieId", JSON.stringify(this.movieData.id))
    this._router.navigate(['/movieDetails/', this.movieData.id, this.movieData.title])
// http://localhost:4200/movieDetails/746419
  }

}

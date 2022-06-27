import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MovieListService } from '../movie-list.service';
import { moviesData } from '../movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieList: Movie[] = moviesData

  sub:any

  @ViewChild(MovieCardComponent) MovieCardComponent:any;




  constructor(private _movieListService: MovieListService) {
    // console.log(this.MovieCardComponent);
    console.log("test 1");


   }

  ngOnInit(): void {
    console.log("test 2");
    this.sub = this._movieListService.getMovies('movie').subscribe(
      (res: any) => {
        console.log(res);
        this.movieList = res.results

      },
      (err: any) => {
        console.log("error");

      }
    )
  }

  ngAfterViewInit() {
    console.log(this.MovieCardComponent.title);

  }
  ngOnDestroy() {
    this.sub.unsubscribe()
    console.log("i'm out now");

  }

  test(data: any) {
    console.log(data,"this come from parent comonent");

  }

}



// life  cycle
// onInit
// afterView init
// Destroy

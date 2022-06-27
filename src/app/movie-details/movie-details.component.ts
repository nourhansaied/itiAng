import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { moviesData } from '../movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  moviesData: Movie[] = moviesData
  movieId: number = 0
  movieDetails = {} as Movie
  // private activatedRouter: ActivatedRoute depndancy inject
  constructor(private activatedRouter: ActivatedRoute) {
    this.movieId = this.activatedRouter.snapshot.params['btee5']
    console.log(this.moviesData);

    // this.movieDetails = this.moviesData.find((ele:Movie) => ele.id == this.movieId)
  }

  ngOnInit(): void {
  }

  // service
}

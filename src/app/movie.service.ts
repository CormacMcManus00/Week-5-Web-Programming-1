import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie: Movie;

  constructor() { }

  /*moviesList = [
    { title : 'The GodFather', year : '1972', director: 'Francis Ford Coppola'},
    { title : 'Millers Crossing', year : '1990', director: 'The Coen Brothers'},
    { title : 'Dial M for murder', year : '1954', director: 'Alfred Hitchcock'},
    { title : 'Whiplash', year : '2014', director: 'Damien Chazelle'}
  ];*/

  moviesList = [
    new Movie('The Godfather', '1972', 'Francis Ford Coppola'),
    new Movie('Millers Crossing','1990','The Coen Brothers'),
    new Movie('Dial M For Murder','1954','Alfred Hitchcock'),
    new Movie('Whiplash','2014','Damien Chazelle')
  ]

  getMovies() {
    return this.moviesList;
  }

  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.moviesList.push({title:movietitle, director:moviedirector, year:movieyear});
  }
}

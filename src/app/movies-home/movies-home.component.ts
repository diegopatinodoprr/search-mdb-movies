
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchMoviesService } from '../search-movies.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css']
})
export class MoviesHomeComponent implements OnInit {
  searchfield = 'spiderman';
  movies = [];
  animal;
  constructor(public dialog: MatDialog, private searchMovies: SearchMoviesService) {

  }

  ngOnInit() {
  }
  search() {

    this.searchMovies.search(this.searchfield, 1).then((data) => {
      this.movies = data.results;

    });

  }
  favorites() {

    this.searchMovies.popular(1).then((data) => {
      this.movies = data.results;

    });

  }
  details(movieId) {
    console.log('find detail for movie', movieId);
    this.openDialog(movieId);
  }

  openDialog(movieId): void {
    const dialogRef = this.dialog.open(MovieDetailComponent, {
      width: '250px',
      data: { movieId: movieId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}


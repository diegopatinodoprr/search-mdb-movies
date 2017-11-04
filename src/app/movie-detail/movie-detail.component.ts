import { SearchMoviesService } from '../search-movies.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie;
  dataIsReady = false;
  constructor(public dialogRef: MatDialogRef<MovieDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private searchMovies: SearchMoviesService) { }

  ngOnInit() {

    this.searchMovies.info(this.data.movieId).then((info) => {
      this.movie = info;
      this.dataIsReady = true;
      console.log(info);

    });

  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}

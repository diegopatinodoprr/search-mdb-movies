import { SearchMoviesService } from './search-movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule, MatDialogRef,
  MatIconModule, MatToolbarModule, MatCardModule, MatButtonModule, MatDialogModule,MatProgressSpinnerModule
} from '@angular/material';
import { MoviesHomeComponent } from './movies-home/movies-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesHomeComponent,
    MovieDetailComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule

  ],
  entryComponents: [MovieDetailComponent],
  providers: [SearchMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchMoviesService {

  constructor(private http: Http) { }

  popular(page) {
    return this.http.get('http://localhost:3000/popular?page=' + page).toPromise()
      .then(function (response) { return response.json(); })
      .catch(this.handleError);
  }
  search(query, page) {
    return this.http.get('http://localhost:3000/search?q=' + query + '&page=' + page).toPromise()
      .then(function (response) { return response.json(); })
      .catch(this.handleError);
  }
  info(id) {
    return this.http.get('http://localhost:3000/info/' + id).toPromise()
      .then(function (response) { return response.json(); })
      .catch(this.handleError);
  }
  getTorrent(title) {
    return this.http.get('http://localhost:3000/torrent?title=' + title).toPromise()
      .then(function (response) { return response.json(); })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

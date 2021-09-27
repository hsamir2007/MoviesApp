import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Movie } from './movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // movies:Movie[]=[
  //   {}
  // ]
  // movies: Movie[] = [{ poster_path:'',}];
  constructor( private _HttpClient: HttpClient) { }

  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`);
  }

  getMovieDetails( id: string ): Observable<any> {
    // console.log( this.movies );
    return this._HttpClient.get( `https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US` );
   
  }
  
}

import { Component, OnInit ,OnDestroy} from '@angular/core';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  _movieSubscribe:any;
  trendingMovies:any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];
  imgPrefix: string ='https://image.tmdb.org/t/p/w500/';
  
  constructor( private _MoviesService: MoviesService) {   }

  
  ngOnInit(): void {
    console.log ('Home Open');
   
    this._movieSubscribe = this._MoviesService.getTrending( 'movie' ).subscribe( ( respons ) => {
      this.trendingMovies = respons.results.slice( 0, 10 );
    } );

    this._MoviesService.getTrending( 'tv' ).subscribe( ( respons ) => {
      this.trendingTv = respons.results.slice( 0, 10 );
    } );

    this._MoviesService.getTrending( 'person' ).subscribe( ( respons ) => {
      this.trendingPeople = respons.results.slice( 0, 10 );
    } );
  }

  ngOnDestroy(): void {

    console.log( 'Home Destroy' );

    this._movieSubscribe.unsubscribe();

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  id:string = '';
  // moviedetails: Movie[] = [{ poster_path: 'poster_path', }]; // any => interface of movie
  moviedetails:any={};
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';

  constructor( private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService) {

   this.id =  this._ActivatedRoute.snapshot.params.id;
   
   this._MoviesService.getMovieDetails(this.id).subscribe((response)=>{
     this.moviedetails = response;
    //  _MoviesService.movies = response;
   })
   }

  ngOnInit(): void {
  }

}

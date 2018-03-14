
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../../models/MovieDetails.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mf-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: Number;
  movie: MovieDetails;
  height: String;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {
    this.movie = {
      title: 'Nincs cím',
      original_title: null,
      original_language: null,
      status: 'Nincs státusz',
      release_date: 'Nincs dátum',
      popularity: 0,
      runtime: 0,
      vote_average: 0,
      adult: false,
      budget: 0,
      genres: [{ id: 0, name: 'Nincs műfaj' }],
      homepage: 'Nincs hivatalos weboldal',
      imdb_id: 'Nincs IMDB link',
      backdrop_path: 'Nincs Kép',
      poster_path: 'Nincs Kép',
      overview: 'Nincs Leírás'
    };
  }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.title.setTitle(`Részletes leírás :: ${this.activatedRoute.snapshot.data['pageTitle']}`);
    this.api.getMovieById(this.id)
      .subscribe(result => {
        let output = result.json();
        output = { ...this.movie, ...output };
        this.movie = output;
        this.title.setTitle(`${
          this.movie.title
          } (${
          this.listGenres(this.movie.genres)
          }) :: ${
          this.activatedRoute.snapshot.data['pageTitle']
          }`);
      });

  }

  listGenres = array => {
    const output = [];
    array.forEach(row => {
      output.push(row.name);
    });
    return output.join(', ');
  }

  backgroundImage = () =>
    `url(${this.api.getBackgroundUrl()}${this.movie.backdrop_path.toString()})`

}


import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails, movieDetailsData } from '../../models/MovieDetails.model';
import { Title } from '@angular/platform-browser';

declare function escape(s: string): string;
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
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.id = +this.activatedRoute.snapshot.params['id'];
          this.loadMovie();
        }
      );
  }

  loadMovie = () => {
    document.documentElement.scrollTop = 0;
    this.movie = movieDetailsData;
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

  backgroundImage = () => {
    if (this.movie.backdrop_path) {
      return `url(${this.api.getBackgroundUrl()}${this.movie.backdrop_path})`;
    }
  }

  open() {
    window.open(`http://bithumen.be/browse.php?search=${escape(this.movie.title.toString())}`, '_blank');
  }

}

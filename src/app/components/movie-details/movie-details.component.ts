import {Component, Input, OnChanges} from '@angular/core';
import {MovieDetails, movieDetailsData} from '../../models/MovieDetails.model';
import {ApiService} from '../../services/api.service';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

declare function escape(s: string): string;

@Component({
  selector: 'mf-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnChanges {

  @Input('id') id: number;

  movie: MovieDetails;
  height: string;
  loading: boolean;
  getGlobal = this.api.getGlobal;
  innerWidth: number;
  loadMovie = () => {
    this.loading = true;
    document.documentElement.scrollTop = 0;
    this.movie = movieDetailsData;
    this.title.setTitle(`${this.activatedRoute.snapshot.data['pageTitle']}`);
    this.api.getMovieById(this.id)
      .subscribe(result => {
        let output = result.json();
        output = {...this.movie, ...output};
        this.movie = output;
        this.title.setTitle(`${
          this.movie.title
          } (${
          this.listGenres(this.movie.genres)
          }) :: ${
          this.activatedRoute.snapshot.data['pageTitle']
          }`);
        this.loading = false;
      });
  };

  listGenres = array => {
    const output = [];
    if (array) {
      array.forEach(row => {
        output.push(row.name);
      });
      return output.join(', ');
    } else {
      return array;
    }
  };

  backgroundImage = () => {
    if (this.movie.backdrop_path) {
      return `url(${this.api.getBackgroundUrl()}${this.movie.backdrop_path})`;
    }
  };

  constructor(
    private api: ApiService,
    private title: Title,
    private activatedRoute: ActivatedRoute
  ) {
    this.innerWidth = window.innerWidth;
  }

  ngOnChanges() {
    this.loadMovie();
  }

  open() {
    window.open(`http://bithumen.be/browse.php?search=${escape(this.movie.title.toString())}`, '_blank');
    window.open(`https://ncore.cc/torrents.php?mire=${escape(this.movie.title.toString())}`, '_blank');
  }

}

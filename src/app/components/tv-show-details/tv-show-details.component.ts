import {AfterContentChecked, Component, Input, OnChanges, OnInit} from '@angular/core';
import {MovieDetails} from '../../models/MovieDetails.model';
import {ApiService} from '../../services/api.service';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

declare function escape(s: string): string;

@Component({
  selector: 'mf-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss']
})

export class TvShowDetailsComponent implements OnChanges, OnInit, AfterContentChecked {

  @Input('tvShow') tvShow: MovieDetails;

  getGlobal = this.api.getGlobal;
  innerWidth: number;
  createdBy: string;
  loading: boolean;
  backgroundImage = () => {
    if (this.tvShow.backdrop_path) {
      return `url(${this.api.getBackgroundUrl()}${this.tvShow.backdrop_path})`;
    }
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

  constructor(
    private api: ApiService,
    private title: Title,
    private activatedRoute: ActivatedRoute,
  ) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.loading = true;
  }

  ngOnChanges() {
    this.title.setTitle(`${
      this.tvShow.name
      } (${
      this.listGenres(this.tvShow.genres)
      }) :: ${
      this.activatedRoute.snapshot.data['pageTitle']
      }`);
    if (this.tvShow.created_by) {
      this.createdBy = this.tvShow.created_by.map(row => row.name).join(', ');
    }
  }

  ngAfterContentChecked() {
    this.loading = false;
  }

  open() {
    window.open(`http://bithumen.be/browse.php?search=${escape(this.tvShow.name.toString())}`, '_blank');
    window.open(`https://ncore.cc/torrents.php?mire=${escape(this.tvShow.name.toString())}`, '_blank');
  }

}

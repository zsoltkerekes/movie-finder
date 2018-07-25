import {ApiService} from '../../services/api.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieDetails, movieDetailsData} from '../../models/MovieDetails.model';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'mf-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})

export class TVDetailsComponent implements OnInit {

  id: number;
  tvShow: MovieDetails;
  height: string;
  getGlobal = this.api.getGlobal;
  innerWidth: number;

  loadTvShow = () => {
    document.documentElement.scrollTop = 0;
    this.tvShow = movieDetailsData;
    this.title.setTitle(`${this.activatedRoute.snapshot.data['pageTitle']}`);
    this.api.getTvShowById(this.id)
      .subscribe(result => {
        let output = result.json();
        output = {...this.tvShow, ...output};
        this.tvShow = output;
        this.title.setTitle(`${ this.tvShow.name } :: ${  this.activatedRoute.snapshot.data['pageTitle']      }`);
      });
  }

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.id = +this.activatedRoute.snapshot.params['id'];
          this.loadTvShow();
        }
      );
  }


}

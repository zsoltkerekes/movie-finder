import { TvShowEpisodes, tvShowEpisodesData } from '../../models/tv-show-episodes.model';
import { MovieDetails, movieDetailsData } from '../../models/MovieDetails.model';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf-tv-show-episodes-details',
  templateUrl: './tv-show-episodes-details.component.html',
  styleUrls: ['./tv-show-episodes-details.component.scss']
})
export class TvShowEpisodesDetailsComponent implements OnInit {

  id: string;
  season: string;
  episodeNumber: number;
  innerWidth: number;

  tvShow: MovieDetails;
  tvShowEpisodes: TvShowEpisodes;
  getGlobal = this.api.getGlobal;

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {
    this.innerWidth = window.innerWidth;
   }

  setEpisode = index => this.episodeNumber = index;

  ngOnInit() {
    this.tvShow = movieDetailsData;
    this.tvShowEpisodes = tvShowEpisodesData;

    this.episodeNumber = -1;


    this.activatedRoute.params
      .subscribe(
        () => {
          document.documentElement.scrollTop = 0;
          this.episodeNumber = -1;

          this.id = this.activatedRoute.snapshot.params['id'];
          this.season = this.activatedRoute.snapshot.params['season'];

          this.api.getTvShowById(this.id)
            .subscribe(result => {
              let output = result.json();
              output = { ...this.tvShow, ...output };
              this.tvShow = output;
              this.title.setTitle(`${this.season}. évad :: ${this.tvShow.name} :: ${this.activatedRoute.snapshot.data['pageTitle']}`);
               });

          this.api.getTvShowEpisodes(this.id, this.season)
            .subscribe(response => {
              const output = response.json();
              output.episodes = output.episodes.map(row => row || {});
              this.tvShowEpisodes = output;
            });



        }
      );
  }


}



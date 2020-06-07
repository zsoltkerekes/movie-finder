import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-recommended-tv-shows',
  templateUrl: './recommended-tv-shows.component.html',
  styleUrls: ['./recommended-tv-shows.component.scss'],
})
export class RecommendedTvShowsComponent implements OnInit {
  @ViewChild('container', { static: true }) container;

  id: number;
  recommendedTvShowsText: string;
  recommendedTvShows: { results: Array<ListItem> };

  listGenres = this.api.getTvGenreList;
  genres = this.api.tvGenres;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private language: LanguageService
  ) {}

  ngOnInit() {
    this.recommendedTvShowsText = this.language.getText(
      'Recommended Tv Shows',
      this.api.getGlobal()
    );
    this.recommendedTvShows = {
      results: [listItemInitData],
    };

    this.activatedRoute.params.subscribe(() => {
      this.container.nativeElement.scrollLeft = 0;
      this.id = +this.activatedRoute.snapshot.params['id'];
      this.api.getRecommendedTvShows(this.id).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        this.recommendedTvShows = output;
      });
    });
  }
}

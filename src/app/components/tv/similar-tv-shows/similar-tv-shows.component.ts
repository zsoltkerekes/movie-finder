import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ListItem,
  listItemInitData,
} from '../../../interfaces/listItem.interface';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-similar-tv-shows',
  templateUrl: './similar-tv-shows.component.html',
  styleUrls: ['./similar-tv-shows.component.scss'],
})
export class SimilarTvShowsComponent implements OnInit {
  @ViewChild('container', { static: true }) container;

  id: number;
  similarTvShowsText: string;
  similarTvShows: { results: Array<ListItem> };

  listGenres = this.api.getTvGenreList;
  genres = this.api.tvGenres;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService,
    private language: LanguageService
  ) {}

  ngOnInit(): void {
    this.similarTvShows = {
      results: [listItemInitData],
    };
    this.similarTvShowsText = this.language.getText(
      'Similar Tv shows',
      this.api.getGlobal()
    );

    this.activatedRoute.params.subscribe(() => {
      this.container.nativeElement.scrollLeft = 0;
      this.id = +this.activatedRoute.snapshot.params['id'];
      this.api.getSimilarTvShows(this.id).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        this.similarTvShows = output;
      });
    });
  }
}

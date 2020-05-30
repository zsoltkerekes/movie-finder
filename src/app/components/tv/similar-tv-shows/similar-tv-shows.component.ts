import { Component, OnInit, ViewChild } from '@angular/core';
import { ListItem, listItemInitData } from '../../../models/listItem.model';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mf-similar-tv-shows',
  templateUrl: './similar-tv-shows.component.html',
  styleUrls: ['./similar-tv-shows.component.scss'],
})
export class SimilarTvShowsComponent implements OnInit {
  @ViewChild('container', { static: true }) container;

  id: number;

  similarTvShows: { results: Array<ListItem> } = {
    results: [listItemInitData],
  };

  listGenres = this.api.getTvGenreList;
  genres = this.api.tvGenres;
  getGlobal = this.api.getGlobal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit() {
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

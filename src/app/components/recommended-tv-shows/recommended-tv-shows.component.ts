import {Component, OnInit, ViewChild} from "@angular/core";
import {ListItem, listItemInitData} from "../../models/listItem.model";
import {ApiService} from "../../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mf-recommended-tv-shows',
  templateUrl: './recommended-tv-shows.component.html',
  styleUrls: ['./recommended-tv-shows.component.scss']
})
export class RecommendedTvShowsComponent implements OnInit {

  @ViewChild('container') container;

  id: number;

  recommendedTvShows: { results: Array<ListItem> } = {results: [listItemInitData]};

  listGenres = this.api.getTvGenreList;
  genres = this.api.tvGenres;
  getGlobal = this.api.getGlobal;

  constructor(private activatedRoute: ActivatedRoute,
              private api: ApiService) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.container.nativeElement.scrollLeft = 0;
          this.id = +this.activatedRoute.snapshot.params['id'];
          this.api.getRecommendedTvShows(this.id)
            .subscribe(response => {
              const output = response.json();
              output.results = output.results.map(row => row || {});
              this.recommendedTvShows = output;
            });
        }
      );
  }


}

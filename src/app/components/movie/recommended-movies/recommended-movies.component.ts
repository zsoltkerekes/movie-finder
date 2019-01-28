import {Component, OnInit, ViewChild} from '@angular/core';
import {ListItem, listItemInitData} from '../../../models/listItem.model';
import {ApiService} from '../../../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mf-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.scss']
})
export class RecommendedMoviesComponent implements OnInit {

  @ViewChild('container') container;
  id: number;
  recommendedMovies: { results: Array<ListItem> } = {results: [listItemInitData]};
  listGenres = this.api.getGenreList;
  genres = this.api.genres;
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
          this.api.getRecommendedMovies(this.id)
            .subscribe(response => {
              const output = response.json();
              output.results = output.results.map(row => row || {});
              this.recommendedMovies = output;
            });
        }
      );
  }


}

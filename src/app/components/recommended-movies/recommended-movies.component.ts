import { Component, OnInit, Input } from '@angular/core';
import { ListItem, listItemInitData } from '../../models/listItem.model';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mf-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.scss']
})
export class RecommendedMoviesComponent implements OnInit {

  id: Number;

  recommendedMovies: { results: Array<ListItem> } = { results: [listItemInitData] };

  listGenres = this.api.getGenreList;
  genres = this.api.genres;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.id = +this.activatedRoute.snapshot.params['id'];
          this.api.getRecommendedMovies(this.id)
            .subscribe(response => {
              this.recommendedMovies = response.json();
            });
        }
      );
  }


}

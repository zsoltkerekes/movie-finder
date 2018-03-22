import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { ListItem, listItemInitData } from './../../models/listItem.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {


  upcomingMovies: { results: Array<ListItem> } = { results: [listItemInitData] };
  page: number;

  listGenres = this.api.getGenreList;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.page = +this.activatedRoute.snapshot.params['page'] || 1;
          this.api.getUpcoming(this.page)
            .subscribe(response => {
              const willBeSorted = response.json();
              willBeSorted.results.sort((a, b) => {
                if (a.popularity > b.popularity) { return -1; }
                if (a.popularity < b.popularity) { return 1; }
                return 0;
              });
              this.upcomingMovies = willBeSorted;
            });
        }
      );
  }

}

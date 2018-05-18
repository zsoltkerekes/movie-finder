import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { ListItem, listItemInitData } from './../../models/listItem.model';
import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'mf-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent implements OnInit {

  @ViewChild ('container') container;

  upcomingMovies: { results: Array<ListItem> };
  page: number;

  listGenres = this.api.getGenreList;
  getGlobal = this.api.getGlobal;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        () => {
          this.upcomingMovies = { results: [listItemInitData] };
          this.container.nativeElement.scrollLeft = 0;
          this.page = +this.activatedRoute.snapshot.params['page'] || 1;
          this.api.getUpcoming(this.page)
            .subscribe(response => {
              const output = response.json();
              output.results = output.results.map(row => row || {});
              const willBeSorted = output;
              willBeSorted.results.sort((a, b) => {
                if (a.popularity > b.popularity) { return -1; }
                if (a.popularity < b.popularity) { return 1; }
                return 0;
              });
              this.upcomingMovies = willBeSorted;
            });
            document.documentElement.scrollTop = 0;
        }
      );
  }

}

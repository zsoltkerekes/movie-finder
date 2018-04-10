import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'mf-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

  @Input() results;
  @Input() url;
  @Input() type;

  pagination: {
    total_pages: number,
    total_results: number,
    page: number,
    links: Array<any>
  };

  moviePage: number;
  tvShowPage: number;
  personPage: number;

  getGlobal = this.api.getGlobal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnChanges() {

    this.moviePage = +this.activatedRoute.snapshot.params['moviePage'] || 1;
    this.tvShowPage = +this.activatedRoute.snapshot.params['tvShowPage'] || 1;
    this.personPage = +this.activatedRoute.snapshot.params['personPage'] || 1;

    if (this.results) {

      this.pagination = {
        total_pages: +this.results.total_pages,
        total_results: +this.results.total_results,
        page: +this.results.page,
        links: []
      };

      for (let i = 0; i < +this.results.total_pages; i++) {

        let expandedUrl = `${this.url}/${i + 1}`;

        if (this.type === 'movie') { expandedUrl = `${this.url}/${i + 1}/${this.tvShowPage}/${this.personPage}`; }
        if (this.type === 'tvShow') { expandedUrl = `${this.url}/${this.moviePage}/${i + 1}/${this.personPage}`; }
        if (this.type === 'person') { expandedUrl = `${this.url}/${this.moviePage}/${this.tvShowPage}/${i + 1}`; }

        this.pagination.links[i] = {
          url: expandedUrl,
          name: `${i * 20 + 1}-${(i + 1) * 20}`
        };
      }

      if (this.pagination.links.length > 0) {
        this.pagination.links[this.pagination.links.length - 1].name =
          `${(+this.results.total_pages - 1) * 20 + 1}-${this.results.total_results}`;
      }

      if (this.pagination.page < 5) {
        this.pagination.links = this.pagination.links.slice(0, 10);
      } else {
        if (this.pagination.page >= 5) {
          this.pagination.links = this.pagination.links.slice(this.pagination.page - 5, this.pagination.page + 5);
        }
      }
    }
  }
}

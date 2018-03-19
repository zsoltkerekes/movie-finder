import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'mf-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

  @Input() results;
  @Input() url;

  pagination: {
    total_pages: number,
    total_results: number,
    page: number,
    links: Array<any>
  };

  constructor() {
  }

  ngOnChanges() {

    if (this.results) {

      this.pagination = {
        total_pages: +this.results.total_pages,
        total_results: +this.results.total_results,
        page: +this.results.page,
        links: []
      };
      for (let i = 0; i < +this.results.total_pages; i++) {
        this.pagination.links[i] = {
          url: `${this.url}/${i + 1}`,
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

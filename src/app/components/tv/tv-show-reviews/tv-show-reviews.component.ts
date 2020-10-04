import { ApiService } from '../../../services/api.service';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'mf-tv-show-reviews',
  templateUrl: './tv-show-reviews.component.html',
  styleUrls: ['./tv-show-reviews.component.scss'],
})
export class TvShowReviewsComponent implements OnChanges {
  @Input() id: number;
  tvShowReviews: {
    id: number;
    page: number;
    results: Array<{
      content: string;
      author: string;
    }>;
  };

  constructor(private api: ApiService) {}

  ngOnChanges(): void {
    if (this.id) {
      this.api.getTvShowReviews(this.id).subscribe((response) => {
        const output = response.json();
        output.results = output.results.map((row) => row || {});
        output.results.forEach(
          (row) => (row.content = row.content.replace(/[_]/g, '"'))
        );
        this.tvShowReviews = output;
      });
    }
  }
}

import {ApiService} from '../../../services/api.service';
import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'mf-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.scss']
})
export class MovieReviewsComponent implements OnChanges {

  @Input() id: number;
  movieReviews: {
    id: number,
    page: number,
    results: Array<{
      content: string
    }>
  };

  constructor(private api: ApiService) {
  }

  ngOnChanges() {
    if (this.id) {
      this.api.getMovieReviews(this.id)
        .subscribe(response => {
          const output = response.json();
          output.results = output.results.map(row => row || {});
          output.results.forEach(row => row.content = row.content.replace(/[_]/g, '"'));
          this.movieReviews = output;
        });
    }
  }

}

import { Component, Input, OnChanges } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'mf-movie-keywords',
  templateUrl: './movie-keywords.component.html',
  styleUrls: ['./movie-keywords.component.scss'],
})
export class MovieKeywordsComponent implements OnChanges {
  @Input() id: number;
  keywords: {
    id: number;
    name: string;
  }[];

  constructor(private api: ApiService) {}

  ngOnChanges() {
    this.keywords = [];
    if (this.id) {
      this.api.getMovieKeywords(this.id).subscribe((response) => {
        this.keywords = response.json().keywords;
      });
    }
  }
}

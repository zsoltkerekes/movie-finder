import { Component, Input, OnChanges } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'mf-tv-keywords',
  templateUrl: './tv-keywords.component.html',
  styleUrls: ['./tv-keywords.component.scss'],
})
export class TvKeywordsComponent implements OnChanges {
  @Input() id: number;
  keywords: string[];

  constructor(private api: ApiService) {}

  ngOnChanges(): void {
    this.keywords = [];
    if (this.id) {
      this.api.getTvKeywords(this.id).subscribe((response) => {
        const output = [];
        response.json().results.forEach((keyword) => {
          output.push(keyword.name);
        });
        this.keywords = output;
      });
    }
  }
}

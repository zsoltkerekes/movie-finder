import { Images, imagesData } from './../../models/images.model';
import { Component, OnChanges, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'mf-tv-images',
  templateUrl: './tv-images.component.html',
  styleUrls: ['./tv-images.component.scss']
})
export class TvImagesComponent implements OnChanges {

  @Input('id') id;
  images: Images[];

  constructor(
    private api: ApiService
  ) { }

  ngOnChanges() {
    this.images = imagesData;
    if (this.id) {
      this.api.getTvImages(this.id)
        .subscribe(response => {
          const output = response.json();
          this.images = [
            ...output.backdrops,
            ...output.posters
          ].sort((a, b) => {
            if (a.vote_average < b.vote_average) { return 1; }
            if (a.vote_average > b.vote_average) { return -1; }
            return 0;
          });
        });
    }
  }

}

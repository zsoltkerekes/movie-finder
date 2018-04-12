import { Images, imagesData } from './../../models/images.model';
import { Component, OnChanges, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'mf-movie-images',
  templateUrl: './movie-images.component.html',
  styleUrls: ['./movie-images.component.scss']
})
export class MovieImagesComponent implements OnChanges {

  @Input('id') id;
  images: Images[];
  getGlobal = this.api.getGlobal;

  constructor(
    private api: ApiService
  ) { }

  ngOnChanges() {
    this.images = imagesData;
    if (this.id) {
      this.api.getMovieImages(this.id)
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

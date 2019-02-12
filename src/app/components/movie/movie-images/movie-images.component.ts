import {Images, imagesData} from '../../../models/images.model';
import {Component, Input, OnChanges} from '@angular/core';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'mf-movie-images',
  templateUrl: './movie-images.component.html',
  styleUrls: ['./movie-images.component.scss']
})
export class MovieImagesComponent implements OnChanges {

  @Input() id: number;
  images: Images[];
  getGlobal = this.api.getGlobal;
  innerWidth: number;

  constructor(private api: ApiService) {
    this.innerWidth = window.innerWidth;
  }

  ngOnChanges() {
    this.images = imagesData;
    if (this.id) {
      this.api.getMovieImages(this.id)
        .subscribe(response => {
          const output = response.json();
          this.images = [
            ...output.backdrops,
            ...output.posters
          ]
            .filter(image => {
              return (image.width <= 1920 && image.height <= 1440);
            })
            .sort((a, b) => {
              if (a.vote_average < b.vote_average) {
                return 1;
              }
              if (a.vote_average > b.vote_average) {
                return -1;
              }
              return 0;
            });
        });
    }
  }

}

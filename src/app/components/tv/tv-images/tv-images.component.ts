import { Images, imagesData } from '../../../interfaces/images.interface';
import { Component, Input, OnChanges } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { setSortBy } from '../../../helpers/sort.helper';

@Component({
  selector: 'mf-tv-images',
  templateUrl: './tv-images.component.html',
  styleUrls: ['./tv-images.component.scss'],
})
export class TvImagesComponent implements OnChanges {
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
      this.api.getTvImages(this.id).subscribe((response) => {
        const output = response.json();
        this.images = [...output.backdrops, ...output.posters]
          // .filter((image) => {
          //   return image.width <= 1920 && image.height <= 1440;
          // })
          .sort(setSortBy('vote_average'));
      });
    }
  }
}

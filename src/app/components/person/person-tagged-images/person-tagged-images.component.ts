import { Images, imagesData } from '../../../models/images.model';
import { Component, Input, OnChanges } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'mf-person-tagged-images',
  templateUrl: './person-tagged-images.component.html',
  styleUrls: ['./person-tagged-images.component.scss'],
})
export class PersonTaggedImagesComponent implements OnChanges {
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
      this.api.getPersonTaggedImages(this.id).subscribe((response) => {
        const output = response.json();
        this.images = [...output.results]
          // .filter(image => {
          //   return image.width <= 1920 && image.height <= 1500;
          // })
          .sort((a, b) => {
            if (a.media.popularity < b.media.popularity) {
              return 1;
            }
            if (a.media.popularity > b.media.popularity) {
              return -1;
            }
            return 0;
          });
      });
    }
  }
}

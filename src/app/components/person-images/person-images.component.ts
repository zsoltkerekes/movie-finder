import {Images, imagesData} from '../../models/images.model';
import {Component, Input, OnChanges} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'mf-person-images',
  templateUrl: './person-images.component.html',
  styleUrls: ['./person-images.component.scss']
})
export class PersonImagesComponent implements OnChanges {

  @Input('id') id;
  images: Images[];
  getGlobal = this.api.getGlobal;
  innerWidth: number;

  constructor(
    private api: ApiService
  ) {
    this.innerWidth = window.innerWidth;
  }

  ngOnChanges() {
    this.images = imagesData;
    if (this.id) {
      this.api.getPersonImages(this.id)
        .subscribe(response => {
          const output = response.json();
          this.images = [
            ...output.profiles
          ]
          // .filter(image => {
          //   return image.width <= 1920 && image.height <= 1500;
          // })
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

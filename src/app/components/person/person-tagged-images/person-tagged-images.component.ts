import { Images, imagesData } from '../../../interfaces/images.interface';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';
import { setSortBy } from '../../../helpers/sort.helper';

@Component({
  selector: 'mf-person-tagged-images',
  templateUrl: './person-tagged-images.component.html',
  styleUrls: ['./person-tagged-images.component.scss'],
})
export class PersonTaggedImagesComponent implements OnInit, OnChanges {
  @Input() id: number;
  images: Images[];
  innerWidth: number;

  constructor(public api: ApiService, public language: LanguageService) {}

  ngOnInit() {
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
          .sort(setSortBy('popularity'));
      });
    }
  }
}

import { Images, imagesData } from '../../../interfaces/images.interface';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { setSortBy } from '../../../helpers/sort.helper';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-tv-images',
  templateUrl: './tv-images.component.html',
  styleUrls: ['./tv-images.component.scss'],
})
export class TvImagesComponent implements OnChanges, OnInit {
  @Input() id: number;
  images: Images[];
  innerWidth: number;

  imagesText: string;
  imageText: string;

  constructor(private api: ApiService, private language: LanguageService) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.imagesText = this.language.getText('Images', this.api.getGlobal());
    this.imageText = this.language.getText('image', this.api.getGlobal());
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

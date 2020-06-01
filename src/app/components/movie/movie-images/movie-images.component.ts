import { Images, imagesData } from '../../../models/images.model';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'mf-movie-images',
  templateUrl: './movie-images.component.html',
  styleUrls: ['./movie-images.component.scss'],
})
export class MovieImagesComponent implements OnChanges, OnInit {
  @Input() id: number;
  images: Images[];
  getGlobal = this.api.getGlobal;
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
      this.api.getMovieImages(this.id).subscribe((response) => {
        const output = response.json();
        this.images = [...output.backdrops, ...output.posters]
          .filter((image) => {
            return image.width <= 1920 && image.height <= 1440;
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

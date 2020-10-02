import { Images, imagesData } from '../../../interfaces/images.interface';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { LanguageService } from '../../../services/language.service';
import { setSortBy } from '../../../helpers/sort.helper';

@Component({
  selector: 'mf-person-images',
  templateUrl: './person-images.component.html',
  styleUrls: ['./person-images.component.scss'],
})
export class PersonImagesComponent implements OnInit, OnChanges {
  @Input() id: number;
  images: Images[];
  innerWidth: number;

  imagesText: string;
  imageText: string;

  constructor(private api: ApiService, private language: LanguageService) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.imagesText = this.language.getText('Images', this.api.getGlobal());
    this.imageText = this.language.getText('image', this.api.getGlobal());
  }

  ngOnChanges(): void {
    this.images = imagesData;
    if (this.id) {
      this.api.getPersonImages(this.id).subscribe((response) => {
        const output = response.json();
        this.images = [...output.profiles].sort(setSortBy('vote_average'));
      });
    }
  }
}

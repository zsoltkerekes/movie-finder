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

  taggedImagesText: string;

  constructor(private api: ApiService, private language: LanguageService) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.taggedImagesText = this.language.getText(
      'Tagged Images from acts',
      this.api.getGlobal()
    );
  }

  ngOnChanges(): void {
    this.images = imagesData;
    if (this.id) {
      this.api.getPersonTaggedImages(this.id).subscribe((response) => {
        const output = response.json();
        this.images = [...output.results].sort(setSortBy('popularity'));
      });
    }
  }
}

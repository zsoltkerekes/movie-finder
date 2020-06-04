import { Component, Input, OnChanges } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import {
  Collection,
  collectionInitData,
} from '../../../interfaces/collection.interface';

@Component({
  selector: 'mf-movie-collection',
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.scss'],
})
export class MovieCollectionComponent implements OnChanges {
  @Input() id: number;
  collection: Collection;

  constructor(private api: ApiService) {}

  loadCollectionData() {
    this.collection = collectionInitData;
    if (this.id) {
      this.api.getMovieCollections(this.id).subscribe((response) => {
        const output = response.json();
        output.parts = output.parts.sort((a, b) => {
          if (a.release_date < b.release_date) {
            return -1;
          } else if (a.release_date > b.release_date) {
            return 1;
          }
          return 0;
        });
        this.collection = output;
      });
    }
  }

  ngOnChanges() {
    this.loadCollectionData();
  }
}

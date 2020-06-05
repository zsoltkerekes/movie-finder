import { Component, Input, OnChanges } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import {
  Collection,
  collectionInitData,
} from '../../../interfaces/collection.interface';
import { setSortBy } from '../../../helpers/sort.helper';

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
        output.parts = output.parts.sort(setSortBy('release_date'));
        this.collection = output;
      });
    }
  }

  ngOnChanges() {
    this.loadCollectionData();
  }
}

import {Component, Input, OnChanges} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Collection, collectionInitData} from '../../../models/collection.model';

@Component({
  selector: 'mf-movie-collection',
  templateUrl: './movie-collection.component.html',
  styleUrls: ['./movie-collection.component.scss']
})
export class MovieCollectionComponent implements OnChanges {
  @Input() id: number;
  getGlobal = this.api.getGlobal;
  collection: Collection;

  constructor(private api: ApiService) {
  }

  loadCollectionData() {
    this.collection = collectionInitData;
    if (this.id) {
      this.api.getMovieCollections(this.id)
        .subscribe(response => {
          this.collection = response.json();
        });
    }
  }

  ngOnChanges() {
    this.loadCollectionData();
  }
}

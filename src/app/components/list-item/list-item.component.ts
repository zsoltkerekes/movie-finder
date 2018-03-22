import { ApiService } from './../../services/api.service';
import { ListItem, listItemInitData } from './../../models/listItem.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mf-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input('movie') movie: ListItem = listItemInitData;
  @Input('tvShow') tvShow: ListItem = listItemInitData;

  listGenres = this.api.getGenreList;
  listTvGenres = this.api.getTvGenreList;

  constructor(
    private api: ApiService
  ) {  }

}

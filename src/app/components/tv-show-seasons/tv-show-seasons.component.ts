import {Component, Input} from "@angular/core";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'mf-tv-show-seasons',
  templateUrl: './tv-show-seasons.component.html',
  styleUrls: ['./tv-show-seasons.component.scss']
})
export class TvShowSeasonsComponent {

  @Input('tvShow') tvShow;
  getGlobal = this.api.getGlobal;
  innerWidth: number;

  constructor(private api: ApiService) {
    this.innerWidth = window.innerWidth;
  }
}

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'mf-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private title: Title,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.title.setTitle(`404 :: ${this.activatedRoute.snapshot.data['pageTitle']}`);
  }

}

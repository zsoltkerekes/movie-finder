import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.title.setTitle(`Nemsokára a mMozikban :: ${this.activatedRoute.snapshot.data['pageTitle']}`);
  }
}

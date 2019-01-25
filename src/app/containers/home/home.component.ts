import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'mf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    document.documentElement.scrollTop = 0;
    this.title.setTitle(`${this.activatedRoute.snapshot.data['pageTitle']}`);
  }

}

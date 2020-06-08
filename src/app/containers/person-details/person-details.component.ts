import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mf-person-details',
  templateUrl: './person-details.component.html',
})
export class PersonDetailsComponent implements OnInit {
  id: number;
  height: string;
  loading: boolean;

  constructor(private title: Title, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => {
      document.documentElement.scrollTop = 0;
      this.id = +this.activatedRoute.snapshot.params['id'];
      this.title.setTitle(`${this.activatedRoute.snapshot.data['pageTitle']}`);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mf-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => {
      if (this.activatedRoute.snapshot.params['id']) {
        this.id = +this.activatedRoute.snapshot.params['id'];
      }
    });
  }
}

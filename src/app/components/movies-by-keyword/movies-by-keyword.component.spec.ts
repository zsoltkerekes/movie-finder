import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MoviesByKeywordComponent} from "./movies-by-keyword.component";

describe('MoviesByKeywordComponent', () => {
  let component: MoviesByKeywordComponent;
  let fixture: ComponentFixture<MoviesByKeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesByKeywordComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesByKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

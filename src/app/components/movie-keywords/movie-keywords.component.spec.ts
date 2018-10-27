import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MovieKeywordsComponent} from "./movie-keywords.component";

describe('MovieKeywordsComponent', () => {
  let component: MovieKeywordsComponent;
  let fixture: ComponentFixture<MovieKeywordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieKeywordsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

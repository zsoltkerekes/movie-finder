import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {TvShowEpisodesDetailsComponent} from "./tv-show-episodes-details.component";

describe('TvShowEpisodesDetailsComponent', () => {
  let component: TvShowEpisodesDetailsComponent;
  let fixture: ComponentFixture<TvShowEpisodesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowEpisodesDetailsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowEpisodesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

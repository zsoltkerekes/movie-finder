import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ByKeywordsComponent} from "./by-keywords.component";

describe('ByKeywordsComponent', () => {
  let component: ByKeywordsComponent;
  let fixture: ComponentFixture<ByKeywordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ByKeywordsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchByPhraseComponent} from './search-by-phrase.component';

describe('SearchByPhraseComponent', () => {
  let component: SearchByPhraseComponent;
  let fixture: ComponentFixture<SearchByPhraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchByPhraseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

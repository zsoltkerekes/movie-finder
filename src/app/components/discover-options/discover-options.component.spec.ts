import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverOptionsComponent } from './discover-options.component';

describe('DiscoverOptionsComponent', () => {
  let component: DiscoverOptionsComponent;
  let fixture: ComponentFixture<DiscoverOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

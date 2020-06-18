import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SideScrollDirective } from './side-scroll.directive';
import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  template: '<p mfSideScroll>Testing Directives is awesome!</p>',
  styles: ['p {width: 200em;}'],
})
class TestComponent {
  scrolled = 0;
  constructor(private element: ElementRef) {}

  @HostListener('mouseover')
  onMouseover() {
    this.scrolled += 1;
  }

  onScroll() {
    this.scrolled += 2;
  }
}

describe('SideScrollDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, SideScrollDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });
});

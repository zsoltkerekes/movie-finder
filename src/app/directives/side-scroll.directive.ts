import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mfSideScroll]',
})
export class SideScrollDirective {
  constructor(private element: ElementRef) {}

  @HostListener('mouseover')
  onScroll(): void {
    this.element.nativeElement.onwheel = (event) => {
      event.preventDefault();
      this.element.nativeElement.scrollLeft += event.deltaY / 1.5;
    };
  }
}

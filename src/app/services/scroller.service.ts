import {Injectable} from '@angular/core';

@Injectable()
export class ScrollerService {

  constructor() {
  }

  toTop(time = 1000) {
    const scrollVelocity = window.scrollY * (1 / time) * 12;
    const interval = setInterval(
      () => {
        document.body.scrollTop -= scrollVelocity;
        document.documentElement.scrollTop -= scrollVelocity;
        if (window.scrollY <= 0) {
          clearInterval(interval);
        }
      });
  }

}

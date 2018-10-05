import {Injectable} from '@angular/core';

@Injectable()
export class ScrollerService {

  constructor() {
  }

  toTop(time = 1000, speedIndex = 12) {
    const height = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const scrollVelocity = height() * (1 / time) * speedIndex;
    const interval = setInterval(
      () => {
        document.body.scrollTop -= scrollVelocity;
        document.documentElement.scrollTop -= scrollVelocity;
        if (!window.pageYOffset) {
          clearInterval(interval);
        }
      });
  }

}

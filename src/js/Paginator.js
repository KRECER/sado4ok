/* global window */

import PubSub from 'pubsub-js';

export default class Paginator {
  constructor() {
    this.scrollEvents();
    this.activeSlide = 1;
    this.canGo = 1;
    this.max = 3;
    this.stopSlide = false;
  }

  scrollEvents() {
    const self = this;


    window.addEventListener('wheel', function(event) {
      if (!self.canGo) return;
      self.canGo = false;

      const direction = event.deltaY > 0 ? 1 : -1;
      let newSlide;

      if (direction == -1) {
        newSlide = self.activeSlide - 1;
        if (newSlide < 1) {
          newSlide = 1;
          self.stopSlide = true;
        } else {
          self.stopSlide = false;
        }
      } else {
        newSlide = self.activeSlide + direction;
        if (newSlide > self.max) {
          newSlide = 3;
          self.stopSlide = true;
        } else {
          self.stopSlide = false;
        }
      }

      PubSub.publish('gotoSlide', {from: self.activeSlide, to: newSlide, stopSlide: self.stopSlide});
      self.activeSlide = newSlide;

      window.setTimeout(function() {
        self.canGo = true;
      }, 500);

    });

  }
}

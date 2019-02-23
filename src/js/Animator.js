/* global document */

import PubSub from 'pubsub-js';
import {TimelineLite} from 'gsap';

PubSub.subscribe('gotoSlide', function(msg, data) {
  const currentSlide = document.querySelector('[data-slide="' + data.from + '"]');
  const newSlide = document.querySelector('[data-slide="' + data.to + '"]');

  const tl = new TimelineLite();

  if (!data.stopSlide) {
    if (data.from < data.to) {
      newSlide.classList.add('screen--show');
      tl.fromTo(newSlide, 0.5, {y: '100%'}, {y: '0%'}, 0);
    } else {
      newSlide.classList.add('screen--show');
      tl.fromTo(currentSlide, 0.5, {y: '0%'}, {y: '100%'}, 0);
    }
  }
});

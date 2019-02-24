/* global document */
/* global window */

import PubSub from 'pubsub-js';
import {TimelineLite} from 'gsap';

PubSub.subscribe('gotoSlide', function(msg, data) {
  const tl = new TimelineLite();
  const currentSlide = document.querySelector('[data-slide="' + data.from + '"]');
  const newSlide = document.querySelector('[data-slide="' + data.to + '"]');
  let windowWidth = document.body.getBoundingClientRect().width;

  window.console.log(data);

  if (!data.stopSlide && windowWidth > 960) {
    if (data.from < data.to) {
      newSlide.classList.add('screen--show');
      tl.fromTo(newSlide, 0.5, {css: {top: '97%'}}, {css: {top: '0%'}}, 0);
    } else {
      currentSlide.classList.remove('screen--show');
      tl.fromTo(currentSlide, 0.5, {css: {top: '0%'}}, {css: {top: '97%'}}, 0);
    }
  }
});

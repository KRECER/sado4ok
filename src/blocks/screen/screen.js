/* global document */
/* global window */

const ready = require('../../js/utils/documentReady.js');

ready(function(){
  // #### Super Custom Scroll ####

  let rePrizes = new RegExp('^/prizes/?$');
  if (rePrizes.test(window.location.pathname)) {
    document.querySelector('.prizes').classList.add('show');
  }

  let reFamily = new RegExp('^/family/?$');
  if (reFamily.test(window.location.pathname)) {
    document.querySelector('.family').classList.add('show');
    document.querySelector('.prizes').classList.add('show');
  }

  let reMain = new RegExp('^/main/?(\\?.+)?$');
  let reRoot = new RegExp('^/(\\?.+)?$');

  document.addEventListener('wheel', scrollDirection);


  let lastScrollDate = new Date();

  function scrollDirection(e) {
    window.console.log('aaaaaaa');

    // if (isPopupOpen) return;
    if (new Date() - lastScrollDate <= 500) {
      return;
    } else {
      lastScrollDate = new Date();
    }


    if ((e.deltaY > 0)) {
      if (document.getElementById('bottom-block') && (reMain.test(window.location.pathname) || reRoot.test(window.location.pathname)) ) {
        window.history.pushState("", "", '/prizes');
        document.getElementById('bottom-block').classList.add('show');
      } else if (document.getElementById('js-scroll-family') && rePrizes.test(window.location.pathname)) {
        window.history.pushState("", "", '/family');
        document.getElementById('js-scroll-family').style.zIndex = 12;
        document.getElementById('js-scroll-family').classList.add('show');
      }
    } else {
      if (document.getElementById('bottom-block') && reFamily.test(window.location.pathname)) {
        window.history.pushState("", "", '/prizes');
        document.getElementById('js-scroll-family').classList.remove('show');
        document.getElementById('.prizes').style.zIndex = 11;
      }
      else if (rePrizes.test(window.location.pathname)) {
        window.history.pushState("", "", '/main');
        document.getElementById('bottom-block').classList.remove('show');
        document.getElementById('bottom-block').style.zIndex = 10;
      }
    }
  }
});

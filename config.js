/* global module */

let config = {
  "notGetBlocks": [
    "blocks-demo.html"
  ],
  "ignoredBlocks": [
    "no-js"
  ],
  "alwaysAddBlocks": [
    "sprite-svg",
    // "sprite-png",
    // "object-fit-polyfill",
  ],
  "addStyleBefore": [
    "src/scss/variables.scss",
    "src/scss/mixins.scss"
  ],
  "addStyleAfter": [
    // "src/scss/print.scss"
  ],
  "addJsBefore": [],
  "addJsAfter": [
    "./script.js"
  ],
  "addAssets": {
    "src/fonts/ProximaSoft-Black.woff2": "fonts/",
    "src/fonts/ProximaSoft-Black.woff": "fonts/",
    "src/fonts/ProximaSoft-Extrabld.woff2": "fonts/",
    "src/fonts/ProximaSoft-Extrabld.woff": "fonts/",
    "src/img/*.{png,svg,jpg,jpeg}": "img/",
    // "src/favicon/*.{png,ico,svg,xml,webmanifest}": "img/favicon",
  },
  "dir": {
    "src": "src/",
    "build": "build/",
    "blocks": "src/blocks/"
  }
};

module.exports = config;

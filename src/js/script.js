/* global window */
require('./Animator');
import Paginator from './Paginator';
// import _ from 'lodash';

const ready = require('./utils/documentReady.js');

ready(function(){
  new Paginator();
  window.console.log('DOM героически построен!');
});

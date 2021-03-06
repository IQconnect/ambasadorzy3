// import external dependencies
import 'jquery';

// Import everything from autoload
import './autoload/**/*';

// import local dependencies
// import Router from './util/Router';
// import common from './routes/common';
// import home from './routes/home';
// import aboutUs from './routes/about';
// import AOS from 'aos';


//import hero from './components/hero';
//import header from './components/header';
import imagemap from './components/image-map';
import heroslider from './components/hero-slider';
import fullpage from './components/fullpage';
import hamburger from './components/hamburger';
import newsslider from './components/news-slider';
import calendar from './components/calendar-slider';
import maingallery from './components/maingallery';
import sponsorslider from './components/sponsor-slider';


/** Populate Router instance with DOM routes */
// const routes = new Router({
//   // All pages
//   common,
//   // Home page
//   home,
//   // About Us page, note the change from about-us to aboutUs.
//   aboutUs,
// });

// Load Events
jQuery(document).ready(() => {
  console.log('READY');
  //hero.init();
  //header.init();
  fullpage.init();
  hamburger.init();

  if($('.hero__selection').length) {
    heroslider.init();
  }

  if($('.hero__selection').length) {
    imagemap.init();
  }

  if($('.calendar-carousel').length) {
    calendar.init();
  }

  if($('.sponsor-carousel').length) {
    sponsorslider.init();
  }

  if($('.maingallery').length) {
   maingallery.init();
  }

  if($('.news-carousel').length) {
    newsslider.init();
  }

});

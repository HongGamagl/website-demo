var ScrollSmooth = (function () {
  'use strict';
  function ScrollSmooth(message) {
    this.init();
  }

  ScrollSmooth.prototype.init = function () {
   this.Scroll();
  }


  ScrollSmooth.prototype.Scroll = function () {
    $('#fullpage').fullpage({
      sectionSelector: '.vertical-scrolling',
      scrollingSpeed: 1000,
      navigation: true,
      slidesNavigation: true,
      controlArrows: false,
      menu: '#menu',
      anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection']  
    }); 
    
  }


  return ScrollSmooth;
}());

// instance
window.addEventListener('DOMContentLoaded', function () {
  var mangageList = new ScrollSmooth();
});

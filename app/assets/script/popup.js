var Popup = (function () {
  'use strict';
  function Popup(message) {   
    this.init();
  }

  Popup.prototype.init = function () {
    this.popup();
  }

  Popup.prototype.popup = function () {

    var popupBtn = document.querySelector(".popup-click");
    var popupInf = document.querySelector(".popup-infor");
    var closeBtn = document.querySelector(".close-button");
    
    popupBtn.addEventListener("click", function() {
      popupInf.classList.toggle("show-modal");
    });

    closeBtn.addEventListener("click", function() {
      popupInf.classList.toggle("show-modal");
    });

    window.addEventListener("click", function windowOnClick(event) {
      if(event.target === popupInf) {
        popupInf.classList.toggle("show-modal");
      }
    });
  }

  return Popup;
}());

// instance
window.addEventListener('DOMContentLoaded', function () {
  var mangageList = new Popup();
});

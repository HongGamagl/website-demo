var Accordion = (function() {
  'use strict';
  function Accordion(message) {
    this.init();
  }

  Accordion.prototype.init = function() {
    this.accordion();
  }

  Accordion.prototype.accordion = function() {
    var accQuest = document.getElementsByClassName("accordion-question");
    var accAns = document.getElementsByClassName('accordion-answer');

    // SET 2 VONG LAP FOR-------
    // function setClass(els, className, fnName) {
    //   for (var i = 0; i < els.length; i++) {
    //       els[i].classList[fnName](className);
    //   }
    // }-------

    for (var i = 0; i < accQuest.length; i++) {
      accQuest[i].addEventListener("click", function() {
        var setClasses = !this.classList.contains('active');
        // SET 2 VONG LAP FOR------
          // setClass(accQuest, 'active', 'remove');
          // setClass(accAns, 'show', 'remove');-------
          for(var i= 0; i < accQuest.length; i++) {
            accQuest[i].classList.remove("active");
            for(var j = 0; j < accAns.length; j++) {
              accAns[j].classList.remove("show");
            }
          }
          
          if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
          }
      });
    }
  };

  return Accordion;
}());

window.addEventListener('DOMContentLoaded', function() {
  var manage = new Accordion();
});
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

var CurdList = (function () {
  'use strict';
  function CurdList(message) {
    this.d = window.document;
    this.init();
  }

  CurdList.prototype.init = function () {
    this.Tab();
  }


  CurdList.prototype.Tab = function (event) {
    var tabItem, tabContent;
        tabItem = document.getElementsByClassName("tablinks");
        tabContent = document.getElementsByClassName("tabcontent");

    for(var i = 0; i < tabItem.length; i++) {
      tabItem[i].addEventListener('click', function() {
        for(var j = 0; j < tabItem.length; j++) {
          if(tabItem[j].classList.contains("active")) {
            tabItem[j].classList.remove("active");
          }
        }
        this.classList.add("active");
        
        var idTabActive = this.id;
        var contentTabActive = "content-"+idTabActive;
        
        for(var j = 0; j < tabContent.length; j++) {
          if(tabContent[j].classList.contains("active")) {
            tabContent[j].classList.remove("active");
          }
        }
        document.getElementById(contentTabActive).classList.add("active");
      });
    }    
  }


  return CurdList;
}());

// instance
window.addEventListener('DOMContentLoaded', function () {
  var mangageList = new CurdList();
});

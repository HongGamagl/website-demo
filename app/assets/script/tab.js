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

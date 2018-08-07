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
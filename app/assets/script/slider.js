// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));


var CurdList = (function () {
  'use strict';
  function CurdList(message) {
    this.greeting = message;
    this.d = window.document;
    var originStore = '{"1": {"name": "Hau"},"2": {"name": "Thy"},"3": {"name": "Toan"}]';
    this.setStore("devlist", originStore);
    this.init();
  }

  CurdList.prototype.init = function () {
    this.addItem();
    this.removeAllItems();
    this.addEventRemoveForItems();
    // this.addEventEditForItems();
  }


  CurdList.prototype.getStore = function (storeName) {
    
  }


  return CurdList;
}());

// instance
window.addEventListener('DOMContentLoaded', function () {
  var mangageList = new CurdList();
});

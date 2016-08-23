'use strict';

function A() {
  console.log('A');
}

A.prototype.print = function() {
  console.log('A @print');
}

module.exports = A;
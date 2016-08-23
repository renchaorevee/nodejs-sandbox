const _ = require('underscore');


console.log('=========== Scenario 1 ============');
var A = require('./A');
var a = new A();
_.times(10, function() {
  a.print();
});

console.log('=========== Scenario 2 ============');
_.times(10, function() {
  var A = require('./A');
  var a = new A();
  a.print();
});

console.log('=========== Scenario 3 ============');
var B = require('./B');
_.times(10, function() {
  B.print();
});

console.log('=========== Scenario 4 ============');
_.times(10, function() {
  var B = require('./B');
  B.print();
});

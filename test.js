/*************Test******************/
var test = require('unit.js');
var str = 'Hello, to the world!';

test.string(str).startsWith('Hello');

if (test.string(str).startsWith('Hello')) {
  console.log('Passed');
}
/***********************************/

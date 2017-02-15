'use strict';

var _jsPerformanceTest = require('js-performance-test');

var _jsPerformanceTest2 = _interopRequireDefault(_jsPerformanceTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pt = new _jsPerformanceTest2.default(1000);

var preTest = function preTest() {
  var Immutable = require('immutable');

  var arr = [];
  var i = 0;

  while (i < 1000) {
    arr.push(i++);
  }
};

var test1 = function test1() {
  arr.concat([]);
};

var test2 = function test2() {
  Immutable.List(arr);
};

pt.addPreTestScripts(preTest);
pt.addTestSnippet('js new array ref', test1);
pt.addTestSnippet('immutable list', test2);

var pt2 = new _jsPerformanceTest2.default(1000);
var preTest2 = function preTest2() {
  var Immutable = require('immutable');

  var arr = [];
  var i = 0;

  while (i < 1000) {
    arr.push(i++);
  }

  var arr2 = arr.concat([]);
  var immutableList = Immutable.List(arr);
};

var test3 = function test3() {
  var arr3 = arr.map(function (element) {
    return element * 10;
  });
};
var test4 = function test4() {
  var immutableList2 = immutableList.map(function (element) {
    return element * 10;
  });
};

pt2.addPreTestScripts(preTest2);
pt2.addTestSnippet('js map', test3);
pt2.addTestSnippet('immutable list map', test4);

pt.runTests().then(function () {
  pt.calculateResults();
  console.log(pt.toString());
}).then(function () {
  pt2.runTests().then(function () {
    pt2.calculateResults();
    console.log(pt2.toString());
  }).catch(function (_err) {
    console.log('_err2', _err);
  });
}).catch(function (_err) {
  console.log('_err1', _err);
});

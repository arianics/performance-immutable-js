import JsPerformanceTest from 'js-performance-test';


let pt = new JsPerformanceTest(1000);

let preTest = () => {
  let Immutable = require('immutable');

  let arr = [];
  let i = 0;

  while (i < 1000) {
    arr.push(i++);
  }
};

let test1 = () => {
  arr.concat([]);
};

let test2 = () => {
  Immutable.List(arr);
};

pt.addPreTestScripts(preTest);
pt.addTestSnippet('js new array ref', test1);
pt.addTestSnippet('immutable list', test2);


let pt2 = new JsPerformanceTest(1000);
let preTest2 = () => {
  let Immutable = require('immutable');

  let arr = [];
  let i = 0;

  while (i < 1000) {
    arr.push(i++);
  }

  var arr2 = arr.concat([]);
  var immutableList = Immutable.List(arr);
};

let test3 = () => {
  var arr3 = arr.map(function(element) {
    return element * 10;
  });
};
let test4 = () => {
  var immutableList2 = immutableList.map(function(element) {
    return element * 10;
  });
};

pt2.addPreTestScripts(preTest2);
pt2.addTestSnippet('js map', test3);
pt2.addTestSnippet('immutable list map', test4);

pt.runTests().then(() => {
  pt.calculateResults();
  console.log(pt.toString());
})
.then(()=> {
  pt2.runTests().then(() => {
    pt2.calculateResults();
    console.log(pt2.toString());
  })
  .catch((_err) => {
    console.log('_err2', _err);
  });
})
.catch((_err) => {
  console.log('_err1', _err);
});


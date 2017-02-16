var JsPerformanceTest = require('js-performance-test').default;
var path = require('path');

var dirname = path.resolve(__dirname);
var pt = new JsPerformanceTest(50);
var preTest = function () {
  var _ = require('lodash');
  var Immutable = require('immutable');
  var es6Todo = require('./es6-todo');
  var jsTodo = require('./js-todo');
  var immutableTodo = require('./immutable-todo');

  var immutableTodos = Immutable.Map();
  var jsTodos = [];
  var es6Todos = [];
  var range = _.range(100);
};

var test1 = function () {
  _.each(range, (index) => {
    immutableTodos = immutableTodo.addTodo(immutableTodos, new immutableTodo.Todo("Todo " + index, "I'm a todo!", false));
  });
};

var test2 = function () {
  _.each(range, (index) => {
    jsTodos = jsTodo.addJsTodo(jsTodos, new jsTodo.JsTodo("Todo " + index, "I'm a todo!", false));
  });
};

var test3 = function () {
  _.each(range, (index) => {
    es6Todos = es6Todo.addEs6Todo(es6Todos, new es6Todo.Es6Todo("Todo " + index, "I'm a todo!", false));
  });
};

pt.addPreTestScripts(preTest); // add test setup script
pt.addTestSnippet('immutable.addTodo', test1); // add first test
pt.addTestSnippet('js.addTodo', test2); // add second test
pt.addTestSnippet('es6.addTodo', test3); // add second test
 
exports.runTest = function() {
  return pt.runTests() // run tests
  .then(() => {
    pt.calculateResults(); // process the results
    console.log(pt.toString()); // print the results
  })
  .catch(() => {
    console.log('wrong');
    // something went wrong
  });
};

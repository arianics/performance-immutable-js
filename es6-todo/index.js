"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEs6Todo = addEs6Todo;
exports.removeEs6Todo = removeEs6Todo;
exports.updateEs6Todo = updateEs6Todo;
exports.mergeEs6Todos = mergeEs6Todos;
exports.clearAllEs6Todos = clearAllEs6Todos;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Es6Todo = exports.Es6Todo = function Es6Todo() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var completed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  _classCallCheck(this, Es6Todo);

  this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  this.title = title;
  this.text = text;
  this.completed = completed;
};

function addEs6Todo(todos, todo) {
  return [].concat(_toConsumableArray(todos), [todo]);
}

function removeEs6Todo(todos, todo) {
  var index = todos.findIndex(function (_elem) {
    return _elem.id === todo.id;
  });

  return [].concat(_toConsumableArray(todos.slice(0, index)), _toConsumableArray(todos.slice(index + 1)));
}

function updateEs6Todo(todos, todo) {
  var index = todos.findIndex(function (_elem) {
    return _elem.id === todo.id;
  });

  return [].concat(_toConsumableArray(todos.slice(0, index)), [todo], _toConsumableArray(todos.slice(index + 1)));
}

function mergeEs6Todos(todos, todos2) {
  return [].concat(_toConsumableArray(todos), _toConsumableArray(todos2));
}

function clearAllEs6Todos(todos) {
  return [];
}

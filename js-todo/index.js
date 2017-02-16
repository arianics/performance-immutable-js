"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addJsTodo = addJsTodo;
exports.removeJsTodo = removeJsTodo;
exports.updateJsTodo = updateJsTodo;
exports.mergeJsTodos = mergeJsTodos;
exports.clearAllJsTodos = clearAllJsTodos;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsTodo = exports.JsTodo = function JsTodo() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var completed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  _classCallCheck(this, JsTodo);

  this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  this.title = title;
  this.text = text;
  this.completed = completed;
};

function addJsTodo(todos, todo) {
  return todos.concat([todo]);
}

function removeJsTodo(todos, todo) {
  var index = todos.findIndex(function (_elem) {
    return _elem.id === todo.id;
  });

  return todos.slice(0, index).concat(todos.slice(index + 1));
}

function updateJsTodo(todos, todo) {
  var index = todos.findIndex(function (_elem) {
    return _elem.id === todo.id;
  });

  return todos.slice(0, index).concat(todo).concat(todos.slice(index + 1));
}

function mergeJsTodos(todos, todos2) {
  return todos.concat(todos2);
}

function clearAllJsTodos(todos) {
  return [];
}

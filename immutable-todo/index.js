"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.removeTodo = removeTodo;
exports.updateTodo = updateTodo;
exports.mergeTodos = mergeTodos;
exports.clearAll = clearAll;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Todo = exports.Todo = function Todo() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var completed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  _classCallCheck(this, Todo);

  this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  this.title = title;
  this.text = text;
  this.completed = completed;
};

function addTodo(todos, todo) {
  return todos.set(todo.id, todo);
}

function removeTodo(todos, todo) {
  return todos.delete(todo.id, todo);
}

function updateTodo(todos, todo) {
  return todos.update(todo.id, function (todo) {
    return todo;
  });
}

function mergeTodos(todos, todos2) {
  return todos.merge(todos2);
}

function clearAll(todos) {
  return todos.clear();
}

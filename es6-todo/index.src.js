export class Es6Todo {
  
  constructor(title="", text="", completed=false) {
    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.title = title;
    this.text = text;
    this.completed = completed;
  }
  
}

export function addEs6Todo(todos, todo) {
  return [...todos, todo];
}

export function removeEs6Todo(todos, todo) {
  var index = todos.findIndex(function(_elem) {
    return _elem.id === todo.id;
  });

  return [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
  ];
}

export function updateEs6Todo(todos, todo) {
  var index = todos.findIndex(function(_elem) {
    return _elem.id === todo.id;
  });

  return [
    ...todos.slice(0, index),
    todo,
    ...todos.slice(index + 1)
  ];
}

export function mergeEs6Todos(todos, todos2) {
  return [
    ...todos,
    ...todos2
  ];
}

export function clearAllEs6Todos(todos) {
  return [];
}
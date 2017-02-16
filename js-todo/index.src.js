export class JsTodo {
  
  constructor(title="", text="", completed=false) {
    this.id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    this.title = title;
    this.text = text;
    this.completed = completed;
  }
  
}

export function addJsTodo(todos, todo) {
  return todos.concat([todo]);
}

export function removeJsTodo(todos, todo) {
  var index = todos.findIndex(function(_elem) {
    return _elem.id === todo.id;
  });

  return todos
    .slice(0, index)
    .concat(todos.slice(index + 1));
}

export function updateJsTodo(todos, todo) {
  var index = todos.findIndex(function(_elem) {
    return _elem.id === todo.id;
  });

  return todos
    .slice(0, index)
    .concat(todo)
    .concat(todos.slice(index + 1));
}

export function mergeJsTodos(todos, todos2) {
  return todos.concat(todos2);
}

export function clearAllJsTodos(todos) {
  return [];
}
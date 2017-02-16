import {expect} from 'chai';
import {Es6Todo, addEs6Todo, removeEs6Todo, updateEs6Todo, mergeEs6Todos, clearAllEs6Todos} from './index';
import _ from 'lodash';

describe('Modifying a JS array using es6 operators', () => {
  
  it('should add todo to state', () => {

    const todo = new Es6Todo("Todo 1", "I'm a todo!", false);
    
    let todos = [];
    todos = addEs6Todo(todos, todo);

    expect(todos.find((elem) => elem.id === todo.id)).to.equal(todo);
    
  });

  it('should remove todo from state', () => {

    const todo = new Es6Todo("Todo 1", "I'm a todo!", false);
    
    let todos = [];
    todos = addEs6Todo(todos, todo);

    expect(todos.find((elem) => elem.id === todo.id)).to.equal(todo);
      
    todos = removeEs6Todo(todos, todo); 
    expect(todos.find((elem) => elem.id === todo.id)).to.be.undefined;
    
  });
  
  it('should update todo', () => {

    const todo = new Es6Todo("Todo 1", "I'm a todo!", false);
    
    let todos = [];
    todos = addEs6Todo(todos, todo);
    todo.title = "New Title"
      
    todos = updateEs6Todo(todos, todo);  
    expect(todos.find((elem) => elem.id === todo.id).title).to.equal("New Title");
    
  });  
  
  it('should remove all todos', () => {

    var todos = [];
    
    _.each(_.range(10), (index) => {
      todos = addEs6Todo(todos, new Es6Todo("Todo " + index, "I'm a todo!", false));
    });

    expect(todos.length).to.equal(10);
      
    todos = clearAllEs6Todos(todos); 
    expect(todos.length).to.equal(0);
    
  });  
  
  it('should merge todos', () => {

    var todos = [];
    var todos2 = [];
    
    _.each(_.range(10), (index) => {
      todos = addEs6Todo(todos, new Es6Todo("Todo " + index, "I'm a todo!", false));
    });

    _.each(_.range(10), (index) => {
      todos2 = addEs6Todo(todos2, new Es6Todo("Todo " + index, "I'm a todo!", false));
    });
    
    todos = mergeEs6Todos(todos, todos2);
    expect(todos.length).to.equal(20);
    
  });  
  
});

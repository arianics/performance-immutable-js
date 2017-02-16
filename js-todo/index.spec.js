import {expect} from 'chai';
import {JsTodo, addJsTodo, removeJsTodo, updateJsTodo, mergeJsTodos, clearAllJsTodos} from './index';
import _ from 'lodash';

describe('Modifying a JS array', () => {
  
  it('should add todo to state', () => {

    const todo = new JsTodo("Todo 1", "I'm a todo!", false);
    
    let todos = [];
    todos = addJsTodo(todos, todo);

    expect(todos.find((elem) => elem.id === todo.id)).to.equal(todo);
    
  });

  it('should remove todo from state', () => {

    const todo = new JsTodo("Todo 1", "I'm a todo!", false);
    
    let todos = [];
    todos = addJsTodo(todos, todo);

    expect(todos.find((elem) => elem.id === todo.id)).to.equal(todo);
      
    todos = removeJsTodo(todos, todo); 
    expect(todos.find((elem) => elem.id === todo.id)).to.be.undefined;
    
  });
  
  it('should update todo', () => {

    const todo = new JsTodo("Todo 1", "I'm a todo!", false);
    
    let todos = [];
    todos = addJsTodo(todos, todo);
    todo.title = "New Title"
      
    todos = updateJsTodo(todos, todo);  
    expect(todos.find((elem) => elem.id === todo.id).title).to.equal("New Title");
    
  });  
  
  it('should remove all todos', () => {

    var todos = [];
    
    _.each(_.range(10), (index) => {
      todos = addJsTodo(todos, new JsTodo("Todo " + index, "I'm a todo!", false));
    });

    expect(todos.length).to.equal(10);
      
    todos = clearAllJsTodos(todos); 
    expect(todos.length).to.equal(0);
    
  });  
  
  it('should merge todos', () => {

    var todos = [];
    var todos2 = [];
    
    _.each(_.range(10), (index) => {
      todos = addJsTodo(todos, new JsTodo("Todo " + index, "I'm a todo!", false));
    });

    _.each(_.range(10), (index) => {
      todos2 = addJsTodo(todos2, new JsTodo("Todo " + index, "I'm a todo!", false));
    });
    
    todos = mergeJsTodos(todos, todos2);
    expect(todos.length).to.equal(20);
    
  });  
  
});

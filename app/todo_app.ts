import {Component} from 'angular2/core';
import {Todo}      from './todo';
import {TodoList}  from './todo_list';
import {TodoForm}  from './todo_form';

@Component({
  selector: 'todo-app',
  templateUrl: 'app/todo_app.html',
  styles:['a { cursor: pointer; cursor: hand; }'],
  directives: [TodoList, TodoForm]
})

export class TodoApp {
  todos: Todo[] = [
      {text: 'learn angular',        done: true},
      {text: 'build an angular app', done: false}
  ];

  get remaining() {
    return this.todos.filter(todo => !todo.done).length;
  }

  // このような関数を定義して、テンプレートから {{getRemaining()}} の呼び出しても、
  // 上の関数と同じ結果となる
  getRemaining(): Number {
    return this.todos.filter(todo => !todo.done).length; 
  }

  archive(): void {
    let oldTodos = this.todos;
    this.todos = [];
    oldTodos.forEach(todo => {
      if (!todo.done) { this.todos.push(todo); }
    });
  }

  addTask(task: Todo) {
    this.todos.push(task);
  }
}

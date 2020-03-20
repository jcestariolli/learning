import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoSevice } from './todo.service';

@Component({
  selector: 'jeka-app',
  template: `<h1>NodeTodo</h1>
  <ul>
  <li *ngFor = "let todoX of todos">
  {{todoX.todo}} - {{todoX.isDone}}
  </li>
  </ul>`,
  providers: [TodoSevice]
})
export class AppComponent  {
  todos: Todo[];
  constructor(private todoService: TodoSevice) {}
  getTodos(): void {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }
  ngOnInit(): void {
    this.getTodos();
  }
}

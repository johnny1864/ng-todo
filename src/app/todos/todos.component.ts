import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: any = [];

  constructor(private _todo: TodoService) {}

  async ngOnInit() {
    await this._todo.todos.subscribe(results => {
      this.todos = results;
    });
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this._todo.deleteTodo(todo).subscribe();
  }

  addTodo(todo) {
    console.log(todo);

    this._todo.addTodo(todo).subscribe(todo => {
      this.todos.unshift(todo);
    });
  }
}

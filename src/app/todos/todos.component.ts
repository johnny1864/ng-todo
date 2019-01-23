import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: any = [];

  constructor(private todo: TodoService) {}

  async ngOnInit() {
    await this.todo.todos.subscribe(results => {
      this.todos = results;
    });
  }
}

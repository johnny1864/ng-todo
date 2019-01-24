import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: any;
  @Output() deleteTodo = new EventEmitter();

  constructor(private _todo: TodoService) {}

  ngOnInit() {}

  setClasses() {
    let classes = {
      todo: true,
      is_complete: this.todo.completed
    };
    return classes;
  }

  onToggle(todo): void {
    todo.completed = !todo.completed;
    this._todo.toggleComplete(todo);
  }

  delete(todo: any) {
    this.deleteTodo.emit(todo);
  }
}

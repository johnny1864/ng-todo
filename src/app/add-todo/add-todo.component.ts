import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  title: string = '';
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    let todo = {
      title: this.title,
      completed: false
    };
    console.log('todo added');
    this.addTodo.emit(todo);
  }
}

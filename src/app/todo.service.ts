import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  // GETS TODOS FROM API
  get todos() {
    return this.http.get(this.todosUrl);
  }

  // ADD TODO TO SERVER
  addTodo(todo) {
    return this.http.post(this.todosUrl, todo, httpOptions);
  }

  // TOGGLE COMPLETED ON SERVER
  toggleComplete(todo) {
    const putUrl = this.todosUrl + '/' + todo.id;
    console.log(putUrl);
    return this.http.put(putUrl, todo, httpOptions);
  }

  //DELETE TODO
  deleteTodo(todo) {
    const deleteUrl = this.todosUrl + '/' + todo.id;
    console.log(deleteUrl);
    return this.http.delete(deleteUrl, httpOptions);
  }
}

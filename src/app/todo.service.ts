import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  get todos() {
    return this.http.get(this.url);
  }
}

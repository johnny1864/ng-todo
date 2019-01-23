import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoItemComponent],
  imports: [BrowserModule, RoutingModule, HttpClientModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}

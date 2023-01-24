import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListSearchbarComponent } from './components/todo-list-searchbar/todo-list-searchbar.component';
import { TodoListAdderComponent } from './components/todo-list-adder/todo-list-adder.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListSearchbarComponent,
    TodoListAdderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

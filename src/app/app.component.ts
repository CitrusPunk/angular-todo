import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-todo';
  listName = 'Grocery';
  itemList = ['start item', 'next item', 'last item',];
}

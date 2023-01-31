import { Component } from '@angular/core';
import { ECategory } from './enums/ecategory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-todo';
  listName = 'Grocery';
  itemList = [{text: 'start item', category: ECategory.freetime }, {text: 'next item', category: ECategory.freetime},{text: 'last item', category: ECategory.work }];
}

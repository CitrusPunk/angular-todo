import { Component } from '@angular/core';
import { ECategory } from 'src/app/enums/ecategory';
import { IItem } from 'src/app/interfaces/iitem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})

export class TodoListComponent {
  searchItem: IItem;
  addItem: IItem;
  itemList: IItem[];
  filteredList: IItem[];

  constructor(){
    this.searchItem = {text: '', category: ECategory.freetime};
    this.addItem = {text: '', category: ECategory.freetime};
    this.filteredList = [];
    this.itemList = [{text: 'start item', category: ECategory.freetime }, {text: 'next item', category: ECategory.freetime},{text: 'last item', category: ECategory.work }];
    this.filteredList = this.itemList;
  }

  onResetItem(item: IItem){
    this.itemList.splice(this.itemList.indexOf(item),1)
  }

  onAddItem(addItem: IItem){
    if(addItem.text){
      this.itemList.push(addItem);
      this.addItem = {text: '', category: ECategory.freetime};
      this.searchItem.text = '';
      this.onSearchItem();
    }
  }

  onSearchItem(){
    if(this.searchItem.text){
      this.filteredList = this.itemList.filter(el => el.text.includes(this.searchItem.text));
    } else {
      this.filteredList = this.itemList;
    }
  }
}

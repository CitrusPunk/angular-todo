import { Component, Input, SimpleChanges } from '@angular/core';
import { ECategory } from 'src/app/enums/ecategory';
import { IItem } from 'src/app/interfaces/iitem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent {
  searchItem: IItem;
  filteredList: IItem[] = [];
  addItem: IItem;
  private _itemList: IItem[] = [];

  @Input() listName: string;
  @Input() set itemList(value: IItem[]) {
    this._itemList = value;
    this.filteredList = this._itemList;
  }
  get itemList(): IItem[] {
    return this._itemList;
  }

  constructor() {
    this.listName = '';
    this.searchItem = { text: '', category: ECategory.freetime };
    this.addItem = { text: '', category: ECategory.freetime };
  }

  onResetItem(item: IItem) {
    this._itemList.splice(this._itemList.indexOf(item), 1);
  }

  onAddItem(addItem: IItem) {
    if (addItem.text) {
      this._itemList.push(addItem);
      this.addItem = { text: '', category: ECategory.freetime };
      this.searchItem.text = '';
      this.onSearchItem();
    }
  }

  onSearchItem() {
    if (this.searchItem.text) {
      this.filteredList = this._itemList.filter((el) =>
        el.text.includes(this.searchItem.text)
      );
    } else {
      this.filteredList = this._itemList;
    }
  }
}

import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent {
  searchItem: string;
  filteredList: string[] = [];
  addItem: string;
  private _itemList: string[] = [];

  @Input() listName: string;
  @Input() set itemList(value: string[]) {
    this._itemList = value;
    this.filteredList = this._itemList;
  }
  get itemList(): string[] {
    return this._itemList;
  }

  constructor() {
    this.listName = '';
    this.searchItem = '';
    this.addItem = '';
  }

  onResetItem(item: string) {
    this._itemList.splice(this._itemList.indexOf(item), 1);
  }

  onAddItem(addItem: string) {
    if (addItem) {
      this._itemList.push(addItem);
      this.addItem = '';
      this.searchItem = '';
      this.onSearchItem();
    }
  }

  onSearchItem() {
    if (this.searchItem) {
      this.filteredList = this._itemList.filter((el) =>
        el.includes(this.searchItem)
      );
    } else {
      this.filteredList = this._itemList;
    }
  }
}

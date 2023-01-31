import { Component, Input, SimpleChanges } from '@angular/core';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent {
  faTrash = faTrash;
  faPlus = faPlus;
  searchItem: string;
  filteredList: string[] = [];
  addItem: string;
  private _itemList: string[] = [];

  @Input() listName: string;
  @Input() set itemList(value: string[]) {
    this._itemList = [...value];
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

  onDeleteItem(index: number) {
    this._itemList.splice(index, 1);
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

  trackByIdx(index: number, obj: any): any {
    return index;
  }

  deleteIfEmpty(index: number) {
    console.log('focused out ' + index);
    if (this.filteredList[index].length < 1) {
      this._itemList.splice(index, 1);
    }
  }
}

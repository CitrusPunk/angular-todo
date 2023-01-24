import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListSearchbarComponent } from './todo-list-searchbar.component';

describe('TodoListSearchbarComponent', () => {
  let component: TodoListSearchbarComponent;
  let fixture: ComponentFixture<TodoListSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListSearchbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListAdderComponent } from './todo-list-adder.component';

describe('TodoListAdderComponent', () => {
  let component: TodoListAdderComponent;
  let fixture: ComponentFixture<TodoListAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListAdderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.css']
})
export class TodoListItemUiComponent {

  @Input()
  todo: Todo;

  @Output()
  edit = new EventEmitter<void>()

  @Output()
  delete = new EventEmitter<void>()

  @Output()
  toggle = new EventEmitter<void>()

  onEdit() {
    this.edit.emit()
  }

  onDelete() {
    this.delete.emit()
  }

  onToggle(event: any) {
    event.preventDefault();
    this.toggle.emit();
  }

}

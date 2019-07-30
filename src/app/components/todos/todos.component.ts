import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false,
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: false,
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false,
      },
    ];
  }
}

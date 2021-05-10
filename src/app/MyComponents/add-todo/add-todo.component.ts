import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title:String
  desc:String

  @Output() addTodo : EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

    onSubmit(){

      const todo={
        sno:5,
        title:this.title,
        desc:this.desc,
        active:true
      }
      console.log(todo)
      this.addTodo.emit(todo)

    }
}

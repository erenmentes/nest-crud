import { Injectable, Res } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/create-todo-dto';

@Injectable()
export class TodoService {

    private todoList: Todo[] = [];
    private currentId = 0;

    getAllTodos() {
        return this.todoList;
    };

    getTodoById(id : number) {
        return this.todoList.find(todo => todo.id === id);
    };

    createTodo(todo : CreateTodoDto) : Todo {
        const newTodo: Todo = {
            id: this.currentId++,
            title: todo.title,
            description: todo.description,
            author: todo.author
        }
        this.todoList.push(newTodo);
        return newTodo
    };

    updateTodo(id : number, todo : CreateTodoDto) : Todo | string {
        const existingTodo = this.todoList.find(t => t.id === id);
        if (!existingTodo) return "Todo not found!";

        existingTodo.title = todo.title ?? existingTodo.title;
        existingTodo.description = todo.description ?? existingTodo.description;
        existingTodo.author = todo.author ?? existingTodo.author;

        return existingTodo;
    };

    deleteTodo(id : number) : string {
        const existingTodo = this.todoList.find(t => t.id === id);
        if(!existingTodo) return "Todo not found!";

        this.todoList = this.todoList.filter(todo => todo.id !== id)
        return "Todo deleted successfully!";
    };
};

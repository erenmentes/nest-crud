import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo-dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {

    constructor(private todoService : TodoService) {}

    @Get()
    getAllTodos() {
        return this.todoService.getAllTodos();
    };

    @Get(":id")
    getTodoById(@Param('id') id : number ) {
        return this.todoService.getTodoById(id);
    };

    @Post()
    createTodo(@Body() createTodoDto : CreateTodoDto) {
        return this.todoService.createTodo(createTodoDto);
    };

    @Patch(":id")
    updateTodo(@Body() updateTodoDto : UpdateTodoDto, @Param('id') id : number) {
        return this.todoService.updateTodo(id,updateTodoDto);
    }

}

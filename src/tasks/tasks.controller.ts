import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch, Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import {GetTasksFilterDto} from "./dto/get-tasks-filter.dto";

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    if(Object.keys(filterDto).length){
      return this.tasksService.getTasksWithFilters(filterDto);
    }
    return this.tasksService.getAllTasks();
  }

  // @Post()
  // createTask(@Body() body) {
  //   console.log("Body", body);
  // }

  // @Post()
  // createTask(@Body('title') title: string, @Body('description') description: string) {
  //   // console.log("Body", body);
  //   console.log(title, description);
  //   return this.tasksService.createTask(title, description);
  // }

  //With DTO
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string) {
    this.tasksService.deleteTaskById(id);
    return {
      success: true,
    };
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ) {
    return this.tasksService.updateTaskStatus(id, status);
  }
}

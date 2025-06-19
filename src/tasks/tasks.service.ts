import { Injectable } from '@nestjs/common';
import { ITask } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { randomUUID } from 'crypto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks: ITask[] = [];

  findAll(): ITask[] {
    return this.tasks;
  }

  findOne(id: string): ITask {
    return this.tasks.find((task) => task.id === id);
  }

  public create(createTaskDto: CreateTaskDto): ITask {
    const task: ITask = {
      id: randomUUID(),
      ...createTaskDto,
    };
    this.tasks.push(task);
    return task;
  }


  public updateTask(task:ITask, updateTaskDto: UpdateTaskDto):ITask{
    Object.assign(task, updateTaskDto)
    return task

  }

  public deleteTask(task: ITask): void {
    this.tasks = this.tasks.filter((filterdTask) => filterdTask.id === task.id);
  }
}

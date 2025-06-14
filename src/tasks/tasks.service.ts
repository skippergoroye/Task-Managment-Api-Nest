import { Injectable } from '@nestjs/common';
import { ITask } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { randomUUID } from 'crypto';
import { TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: ITask[] = [];

  findAll(): ITask[] {
    return this.tasks;
  }

  findOne(id: string): ITask {
    return this.tasks.find((task) => task.id === id);
  }

  create(createTaskDto: CreateTaskDto): ITask {
    const task: ITask = {
        id: randomUUID(),
        ...createTaskDto,
        
    };
    this.tasks.push(task);
    return task;
  }
}

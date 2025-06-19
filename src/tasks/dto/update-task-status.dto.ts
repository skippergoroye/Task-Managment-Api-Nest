



import { IsNotEmpty, IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskStatusDTO {
    @IsNotEmpty()
    @IsEnum(TaskStatus)
    status: TaskStatus

}
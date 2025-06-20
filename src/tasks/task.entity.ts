import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task.model';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('increment')
  id: string;
  @Column(  {
    type: 'varchar',
    length: 100,
    nullable: false,
    // unique: true,
  })
  title: string;
  @Column()
  description: string;


  @Column()
  descriptiontwo: string;

  @Column()
  descriptionthree: string;

  @Column()
  descriptionFour: string;


  @Column()
descriptionFive: string;


  
  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.OPEN, 
  
  })
  status: TaskStatus;
}

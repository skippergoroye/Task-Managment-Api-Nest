import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from 'src/tasks/task.entity';

export const typeOrmConfig = registerAs('database', (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) ?? 5432,
    username: process.env.DB_USERNAME ?? 'postgres',
    password: process.env.DB_PASSWORD  ?? 'skipper',
    database: process.env.DB_NAME || 'master',
    // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    entities: [Task],
    synchronize: Boolean(process.env.TYPEORM_SYNC ?? 'false'),
    logging: process.env.TYPEORM_LOGGING === 'true',
  }),
);

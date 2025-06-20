// import { config } from 'dotenv';
// import { DataSource } from 'typeorm';

// config();

// export default new DataSource({
//   type: 'postgres',
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT ?? '5432'),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   synchronize: false,
//   entities: ['dist/**/*.entity{.ts,.js}'],
//   migrations: ['dist/src/migrations/**/*{.ts,.js}'],
// });





import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';


config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false, // ⚠️ Don't use in production
  entities: ['dist/**/*.entity{.ts,.js}'], // OR [Task] if you prefer direct imports
  migrations: ['dist/src/migrations/**/*{.ts,.js}'],
  schema: 'public',
  logging: process.env.NODE_ENV !== 'production',
  // If you want to add SSL for production (optional)
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
};

const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;


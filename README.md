#
1. npm i --save @nestjs/config for env

https://docs.nestjs.com/techniques/configuration


2. Typeorm
https://docs.nestjs.com/techniques/database
npm install --save @nestjs/typeorm typeorm pg


Migration Docs
https://typeorm.io/docs/advanced-topics/migrations/

npm install --save-dev typeorm @nestjs/typeorm



# command to run migration From Course
1. npm run migration:run
2. npm run migration:generate src/migrations/IntialMigration



3. code base
   https://github.com/piotr-jura-udemy/nestjs-ultimate-masterclass






# Sure! Let’s walk through a **full practical TypeORM migration flow** using the `Task` entity you just provided.



## 🧱 1. Initial Setup

### ✅ Entity Code (`task.entity.ts`)

```ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task.model';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
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

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.OPEN,
  })
  status: TaskStatus;
}
```

---

## 🔁 2. Migration Flow – From Start to Finish

### 📦 Step 1: Compile TypeScript (if your `typeorm.config.ts` uses `dist`)

```bash
npm run build
```

### 🧬 Step 2: Generate a Migration (Based on This Entity)

```bash
npm run migration:generate -- src/migrations/CreateTaskEntity
```

🔹 This checks your compiled entities in `dist/` (or `src/` if your config points there) and creates a file like:

```
src/migrations/1711111111111-CreateTaskEntity.ts
```

Inside, TypeORM will auto-generate SQL to create the `task` table with all fields.

---

### 🏃 Step 3: Apply the Migration to Your DB

```bash
npm run migration:run
```

This will:

* Run that `CreateTaskEntity` migration
* Actually **create the table** in your database

---

## 🧪 Example Change: Add Another Column

Say you add this to the entity:

```ts
@Column()
descriptionFive: string;
```

Then:

```bash
npm run build
npm run migration:generate -- src/migrations/AddDescriptionFiveToTask
npm run migration:run
```

---

## ✅ Final Checklist

| Task               | Command                                             |
| ------------------ | --------------------------------------------------- |
| Change entity file | *(manually) ✍️*                                     |
| Compile TS         | `npm run build`                                     |
| Generate migration | `npm run migration:generate -- src/migrations/Name` |
| Run migration      | `npm run migration:run`                             |

---

Let me know if you want me to generate the actual migration file content for your `Task` entity above.





# Chatgpt Command For Migration
npm run build
npm run migration:generate -- src/migrations/AddDescriptionFiveToTask
npm run migration:run











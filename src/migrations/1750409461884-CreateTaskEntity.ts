import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTaskEntity1750409461884 implements MigrationInterface {
    name = 'CreateTaskEntity1750409461884'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "description" character varying NOT NULL, "descriptiontwo" character varying NOT NULL, "descriptionthree" character varying NOT NULL, "descriptionFour" character varying NOT NULL, "status" "public"."task_status_enum" NOT NULL DEFAULT 'OPEN', CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "task"`);
    }

}

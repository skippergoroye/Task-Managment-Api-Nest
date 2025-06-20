import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDescriptionFiveToTask1750409613219 implements MigrationInterface {
    name = 'AddDescriptionFiveToTask1750409613219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "descriptionFive" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "descriptionFive"`);
    }

}

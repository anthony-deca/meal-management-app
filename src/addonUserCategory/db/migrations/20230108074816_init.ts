import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('users', (table) => {
            table.increments();
            table.string('name').notNullable();
            table.enum('role', ['admin', 'user']).notNullable().defaultTo('user');
        });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
    .dropTableIfExists('users');
}

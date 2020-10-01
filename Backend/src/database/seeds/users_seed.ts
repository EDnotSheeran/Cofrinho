import Knex from 'knex';

export async function seed(knex:Knex){
    await knex('users').insert([
        { name: 'Edson', email: 'edson@email.com', password: '12345'},
        { name: 'Francisco', email: 'francisco@email.com', password: '12345'},
        { name: 'Daniel', email: 'daniel@email.com', password: '12345'}
    ])
}
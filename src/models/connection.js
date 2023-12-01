const knex = require('knex')({
    client: 'pg',
    connection: {
      host: localhost,
      port: 5432,
      user: postegress,
      password: 191127,
      database: crud,
      ssl: {
        rejectUnauthorized: false,
      },
    },
  })
  
  module.exports = knex
  
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const dotenv = require("dotenv");
dotenv.config();

const sharedConfig = {
  useNullAsDefault: true,
  migrations: { directory: "./src/data/migrations" },
  pool: {
    afterCreate: (conn, done) => conn.run("PRAGMA foreign_keys = ON", done),
  },
};

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/data/test.db3",
    },
    ...sharedConfig,
    seeds: {
      directory: "./src/data/seeds",
    },
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./src/data/database.db3",
      // database: "my_db",
      // user: "username",
      // password: "password",
    },
    ...sharedConfig,
  },
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return (
    knex.schema
      // USERS
      .createTable("users", (tbl) => {
        tbl.increments("user_id");
        tbl.string("first_name", 60).notNullable();
        tbl.string("last_name", 60).notNullable();
        tbl.string("email", 60).notNullable();
        tbl.boolean("admin").defaultTo(0);
      })
      // ROLES
      .createTable("roles", (tbl) => {
        tbl.increments("role_id");
        tbl.string("role_name", 60).notNullable();
      })
      // FOREIGN KEYS
      .createTable("user_roles", (tbl) => {
        tbl.increments("user_roles_id");
        tbl
          .integer("user_id")
          .unsigned()
          .references("user_id")
          .inTable("users")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
          .notNullable();
        tbl
          .integer("role_id")
          .unsigned()
          .references("role_id")
          .inTable("roles")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
          .notNullable();
      })
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("user_roles")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};

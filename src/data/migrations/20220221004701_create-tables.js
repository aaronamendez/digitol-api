/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  // WIZARD_USERS
  return (
    knex.schema
      .createTable("wizards", (tbl) => {
        tbl.increments("wizard_id");
        tbl.string("first_name", 60).notNullable();
        tbl.string("last_name", 60).notNullable();
        tbl.string("email", 60).notNullable();
        tbl.string("password", 128).notNullable();
        tbl.boolean("is_wizard").defaultTo(true);
        tbl.boolean("account_active").defaultTo(false);
      })
      // ORGANIZATIONS
      .createTable("organizations", (tbl) => {
        tbl.increments("org_id");
        tbl.string("org_name", 60).notNullable();
        tbl
          .integer("wizard_id")
          .unsigned()
          .notNullable()
          .references("wizard_id")
          .inTable("wizards")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return (
    knex.schema
      // ALWAYS ADD THIS IN REVERSE
      .dropTableIfExists("organizations")
      .dropTableIfExists("wizards")
  );
};

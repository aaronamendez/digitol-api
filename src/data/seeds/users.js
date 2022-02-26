/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").insert([
    {
      first_name: "Aaron",
      last_name: "Mendez",
      email: "aaron@gmail.com",
      admin: true,
    },
    {
      first_name: "Brandon",
      last_name: "Mendez",
      email: "brandon@gmail.com",
      admin: false,
    },
    {
      first_name: "Melissa",
      last_name: "Evangelista",
      email: "melissa@gmail.com",
      admin: true,
    },
  ]);
};

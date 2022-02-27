/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("wizards").del();
  await knex("wizards").insert([
    {
      first_name: "Yaniv",
      last_name: "Zohar",
      email: "yaniv@gmail.com",
      password: "hashed",
      is_wizard: true,
      account_active: true,
    },
    {
      first_name: "Rachel",
      last_name: "Rachel",
      email: "rachel@gmail.com",
      password: "hashed",
      is_wizard: true,
      account_active: true,
    },
    {
      first_name: "Phil",
      last_name: "Phillips",
      email: "phil@gmail.com",
      password: "hashed",
      is_wizard: true,
      account_active: false,
    },
  ]);
};

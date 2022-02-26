/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("organizations").del();
  await knex("organizations").insert([
    { org_name: "Paragon", wizard_id: 1 },
    { org_name: "Nybrite", wizard_id: 2 },
    { org_name: "Moving LLC", wizard_id: 3 },
  ]);
};

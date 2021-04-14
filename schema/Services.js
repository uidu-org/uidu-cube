cube(`Services`, {
  sql: `SELECT * FROM services`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt],
    },
  },

  dimensions: {
    bodyData: {
      sql: `body_data`,
      type: `string`,
    },

    cover: {
      sql: `cover`,
      type: `string`,
    },

    coverData: {
      sql: `cover_data`,
      type: `string`,
    },

    description: {
      sql: `description`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    name: {
      sql: `name`,
      type: `string`,
    },

    recurring: {
      sql: `recurring`,
      type: `string`,
    },

    createdAt: {
      sql: `created_at`,
      type: `time`,
    },

    updatedAt: {
      sql: `updated_at`,
      type: `time`,
    },

    beginsAt: {
      sql: `begins_at`,
      type: `time`,
    },

    finishesAt: {
      sql: `finishes_at`,
      type: `time`,
    },
  },

  dataSource: `default`,
});

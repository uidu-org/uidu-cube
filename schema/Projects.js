cube(`Projects`, {
  sql: `SELECT * FROM projects`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt],
    },

    estimatedCost: {
      sql: `estimated_cost`,
      type: `sum`,
    },
  },

  dimensions: {
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

    createdAt: {
      sql: `created_at`,
      type: `time`,
    },

    updatedAt: {
      sql: `updated_at`,
      type: `time`,
    },
  },

  dataSource: `default`,
});

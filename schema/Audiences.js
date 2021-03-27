cube(`Audiences`, {
  sql: `SELECT * FROM audiences`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt],
    },
  },

  dimensions: {
    color: {
      sql: `color`,
      type: `string`,
    },

    description: {
      sql: `description`,
      type: `string`,
    },

    filterModel: {
      sql: `filter_model`,
      type: `string`,
    },

    icon: {
      sql: `icon`,
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
});

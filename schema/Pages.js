cube(`Pages`, {
  sql: `SELECT * FROM pages`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, internalName, createdAt, updatedAt],
    },

    itemsCount: {
      sql: `items_count`,
      type: `sum`,
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    internalName: {
      sql: `internal_name`,
      type: `string`,
    },

    permalink: {
      sql: `permalink`,
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

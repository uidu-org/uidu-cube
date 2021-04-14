cube(`Networks`, {
  sql: `SELECT * FROM networks`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt],
    },

    membersCount: {
      sql: `members_count`,
      type: `sum`,
    },
  },

  dimensions: {
    bio: {
      sql: `bio`,
      type: `string`,
    },

    color: {
      sql: `color`,
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

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    name: {
      sql: `name`,
      type: `string`,
    },

    slug: {
      sql: `slug`,
      type: `string`,
    },

    type: {
      sql: `type`,
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

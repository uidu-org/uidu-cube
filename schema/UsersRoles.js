cube(`UsersRoles`, {
  sql: `SELECT * FROM users_roles`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt],
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    preferences: {
      sql: `preferences`,
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

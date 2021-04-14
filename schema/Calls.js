cube(`Calls`, {
  sql: `SELECT * FROM calls`,

  joins: {
    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.workspace_id = ${Workspaces}.id`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt],
    },

    applicationsCount: {
      sql: `applications_count`,
      type: `sum`,
    },
  },

  dimensions: {
    bodyData: {
      sql: `body_data`,
      type: `string`,
    },

    callableType: {
      sql: `callable_type`,
      type: `string`,
    },

    callerType: {
      sql: `caller_type`,
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

    preferences: {
      sql: `preferences`,
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

    expiresAt: {
      sql: `expires_at`,
      type: `time`,
    },

    publishedAt: {
      sql: `published_at`,
      type: `time`,
    },
  },
});

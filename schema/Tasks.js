cube(`Tasks`, {
  sql: `SELECT * FROM tasks`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt],
    },

    commentsCount: {
      sql: `comments_count`,
      type: `sum`,
    },
  },

  dimensions: {
    beginsDay: {
      sql: `begins_day`,
      type: `string`,
    },

    body: {
      sql: `body`,
      type: `string`,
    },

    bodyData: {
      sql: `body_data`,
      type: `string`,
    },

    doneMessage: {
      sql: `done_message`,
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

    taskableType: {
      sql: `taskable_type`,
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

    doneAt: {
      sql: `done_at`,
      type: `time`,
    },

    finishesAt: {
      sql: `finishes_at`,
      type: `time`,
    },
  },
});

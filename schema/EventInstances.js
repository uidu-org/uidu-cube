cube(`EventInstances`, {
  sql: `SELECT * FROM event_instances`,

  joins: {
    Events: {
      sql: `${CUBE}.event_id = ${Events}.id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt],
    },
  },

  dimensions: {
    beginTime: {
      sql: `begin_time`,
      type: `string`,
    },

    endTime: {
      sql: `end_time`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
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

    cancelledAt: {
      sql: `cancelled_at`,
      type: `time`,
    },

    finishesAt: {
      sql: `finishes_at`,
      type: `time`,
    },

    oldBeginsAt: {
      sql: `old_begins_at`,
      type: `time`,
    },

    oldFinishesAt: {
      sql: `old_finishes_at`,
      type: `time`,
    },

    postponedAt: {
      sql: `postponed_at`,
      type: `time`,
    },
  },
});

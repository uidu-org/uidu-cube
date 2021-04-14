/* eslint-disable no-undef */

cube('ActiveRecordModels', {
  sql: `SELECT * FROM ${CUBE}`,

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, createdAt, updatedAt],
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${CUBE}.id`,
      type: 'number',
      primaryKey: true,
      meta: {
        kind: 'uid',
        primary: true,
      },
    },

    createdAt: {
      sql: `${CUBE}.created_at`,
      type: 'time',
      meta: {
        kind: 'date',
      },
    },

    updatedAt: {
      sql: `${CUBE}.updated_at`,
      type: 'time',
      meta: {
        kind: 'date',
      },
    },
  },
});

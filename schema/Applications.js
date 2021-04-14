/* eslint-disable no-undef */

cube('Applications', {
  sql: 'SELECT * FROM applications',

  joins: {},

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, createdAt, updatedAt],
    },
  },

  dimensions: {
    applicableType: {
      sql: 'applicable_type',
      type: 'string',
    },

    applicantType: {
      sql: 'applicant_type',
      type: 'string',
    },

    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    createdAt: {
      sql: 'created_at',
      type: 'time',
    },

    updatedAt: {
      sql: 'updated_at',
      type: 'time',
    },
  },
});

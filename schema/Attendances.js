cube('Attendances', {
  sql: 'SELECT * FROM attendances',

  joins: {},

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, createdAt, updatedAt],
    },
  },

  dimensions: {
    attendableType: {
      sql: `attendable_type`,
      type: `string`,
    },

    attenderType: {
      sql: `attender_type`,
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

    checkedInAt: {
      sql: `checked_in_at`,
      type: `time`,
    },
  },
});

cube(`FormResponses`, {
  sql: `SELECT * FROM form_responses`,

  joins: {
    Forms: {
      sql: `${CUBE}.form_id = ${Forms}.id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt],
    },

    answersCount: {
      sql: `answers_count`,
      type: `sum`,
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    responsableType: {
      sql: `responsable_type`,
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

    completedAt: {
      sql: `completed_at`,
      type: `time`,
    },
  },
});

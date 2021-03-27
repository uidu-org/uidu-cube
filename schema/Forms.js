cube('Forms', {
  sql: 'SELECT * FROM forms',

  joins: {},

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, name, createdAt, updatedAt],
    },

    questionsCount: {
      sql: 'questions_count',
      type: 'sum',
    },
  },

  dimensions: {
    description: {
      sql: 'description',
      type: 'string',
    },

    formableType: {
      sql: 'formable_type',
      type: 'string',
    },

    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    name: {
      sql: 'name',
      type: 'string',
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

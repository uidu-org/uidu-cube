/* eslint-disable no-undef */

cube('Taggings', {
  sql: 'SELECT * FROM taggings',

  joins: {
    Tags: {
      sql: `${CUBE}.tag_id = ${Tags}.id`,
      relationship: 'belongsTo',
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, createdAt],
    },
  },

  dimensions: {
    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    taggableType: {
      sql: 'taggable_type',
      type: 'string',
    },

    taggerType: {
      sql: 'tagger_type',
      type: 'string',
    },

    context: {
      sql: 'context',
      type: 'string',
    },

    createdAt: {
      sql: 'created_at',
      type: 'time',
    },
  },
});

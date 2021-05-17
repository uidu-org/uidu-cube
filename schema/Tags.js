/* eslint-disable no-undef */

cube('Tags', {
  sql: 'SELECT * FROM tags',

  joins: {
    Taggings: {
      relationship: 'hasMany',
      sql: `${CUBE}.id = ${Taggings}.tag_id`,
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, name],
    },

    taggingsCount: {
      sql: 'taggings_count',
      type: 'sum',
    },
  },

  dimensions: {
    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    name: {
      sql: 'name',
      type: 'string',
    },
  },
});

/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('ModelItems', {
  sql: 'SELECT * FROM model_items',

  extends: ActiveRecordModels,

  joins: {
    Models: {
      sql: `${CUBE}.model_id = ${Models}.id`,
      relationship: 'belongsTo',
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, createdAt, updatedAt],
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Field', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },
  },
});

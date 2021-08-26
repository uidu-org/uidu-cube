/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('FieldValues', {
  sql: 'SELECT * FROM field_values',

  extends: ActiveRecordModels,

  joins: {
    Fields: {
      sql: `${CUBE}.field_id = ${Fields}.id`,
      relationship: 'belongsTo',
    },

    ModelItems: {
      sql: `${CUBE}.model_id = ${ModelItems}.id AND ${CUBE}.model_type = 'ModelItem'`,
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
      sql: `${toGlobalId('FieldValue', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },
  },
});

/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Fields', {
  sql: 'SELECT * FROM fields',

  extends: ActiveRecordModels,

  joins: {
    Products: {
      relationship: 'belongsTo',
      sql: `${CUBE}.fieldable_id = ${Products}.id AND ${CUBE}.fieldable_type = "Product"`,
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

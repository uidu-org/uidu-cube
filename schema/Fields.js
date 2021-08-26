/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Fields', {
  sql: 'SELECT * FROM fields',

  extends: ActiveRecordModels,

  joins: {},

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

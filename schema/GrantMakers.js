/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('GrantMakers', {
  sql: 'SELECT * FROM grant_makers',

  extends: ActiveRecordModels,

  joins: {
    Contacts: {
      sql: `${CUBE}.contact_id = ${Contacts}.id`,
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
      sql: `${toGlobalId('GrantMaker', `${CUBE}.id`)}`,
      type: 'string',
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

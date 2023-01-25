/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('ListSubscriptions', {
  sql: 'SELECT * FROM list_subscriptions',

  extends: ActiveRecordModels,

  joins: {
    Lists: {
      sql: `${CUBE}.list_id = ${Lists}.id`,
      relationship: 'belongsTo',
    },

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
      sql: `${toGlobalId('ListSubscription', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },
  },

  segments: {
    active: {
      sql: `${CUBE}.discarded_at = NULL`,
    },
  },
});

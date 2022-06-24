/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Applications', {
  sql: 'SELECT * FROM applications',

  extends: ActiveRecordModels,

  joins: {
    Calls: {
      sql: `${CUBE}.applicable_id = ${Calls}.id AND ${CUBE}.applicable_type = 'Call'`,
      relationship: 'belongsTo',
    },

    Contacts: {
      sql: `${CUBE}.contact_id = ${Contacts}.id`,
      relationship: 'belongsTo',
    },

    // OrderItems: {
    //   sql: `${CUBE}.order_item_id = ${OrderItems}.id`,
    //   relationship: `belongsTo`,
    // },

    // TODO: this breaks memberships subscriptions
    // SubscriptionItems: {
    //   sql: `${CUBE}.subscription_item_id = ${SubscriptionItems}.id`,
    //   relationship: `belongsTo`,
    // },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, status, createdAt, updatedAt],
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Application', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    status: {
      sql: 'aasm_state',
      type: 'string',
    },
  },
});

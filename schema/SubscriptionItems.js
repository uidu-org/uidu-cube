/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('SubscriptionItems', {
  sql: 'SELECT * FROM subscription_items',

  extends: ActiveRecordModels,

  joins: {
    Subscriptions: {
      sql: `${CUBE}.subscription_id = ${Subscriptions}.id`,
      relationship: 'belongsTo',
    },

    Prices: {
      sql: `${CUBE}.price_id = ${Prices}.id`,
      relationship: 'belongsTo',
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, createdAt, updatedAt, prorationDate],
    },

    amount: {
      sql: `${Prices.unitAmount} * ${quantity}`,
      type: 'number',
      format: 'currency',
    },

    quantity: {
      sql: 'quantity',
      type: 'sum',
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('SubscriptionItem', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    preferences: {
      sql: 'preferences',
      type: 'string',
    },

    prorationDate: {
      sql: 'proration_date',
      type: 'time',
    },
  },
});

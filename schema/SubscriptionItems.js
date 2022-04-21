/* eslint-disable no-undef */

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

    quantity: {
      sql: 'quantity',
      type: 'sum',
    },
  },

  dimensions: {
    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
      shown: true,
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

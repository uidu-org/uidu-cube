/* eslint-disable no-undef */

cube('Plans', {
  sql: 'SELECT * FROM plans',

  extends: ActiveRecordModels,

  joins: {
    SubscriptionItems: {
      sql: `${CUBE}.id = ${SubscriptionItems}.plan_id`,
      relationship: 'hasMany',
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, name, stripeId, createdAt, updatedAt],
    },

    subscriptionsCount: {
      sql: 'subscriptions_count',
      type: 'sum',
    },
  },

  dimensions: {
    currency: {
      sql: 'currency',
      type: 'string',
    },

    description: {
      sql: 'description',
      type: 'string',
    },

    amount: {
      sql: 'amount',
      type: 'number',
    },

    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    name: {
      sql: 'name',
      type: 'string',
    },

    stripeId: {
      sql: 'stripe_id',
      type: 'string',
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

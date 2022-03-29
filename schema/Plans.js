/* eslint-disable no-undef */

cube('Plans', {
  sql: 'SELECT * FROM plans',

  extends: ActiveRecordModels,

  joins: {
    Products: {
      sql: `${CUBE}.product_id = ${Products}.id`,
      relationship: 'belongsTo',
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
    id: {
      shown: true,
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

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
      format: 'currency',
      meta: {
        kind: 'currency',
      },
    },

    name: {
      sql: 'name',
      type: 'string',
    },

    interval: {
      type: 'string',
      case: {
        when: [
          { sql: `${CUBE}.interval = 3`, label: 'year' },
          { sql: `${CUBE}.interval = 2`, label: 'month' },
          { sql: `${CUBE}.interval = 1`, label: 'week' },
          { sql: `${CUBE}.interval = 0`, label: 'day' },
        ],
      },
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

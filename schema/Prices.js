/* eslint-disable no-undef */

cube(`Prices`, {
  sql: `SELECT * FROM prices`,

  extends: ActiveRecordModels,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    SubscriptionItems: {
      sql: `${CUBE}.id = ${SubscriptionItems}.price_id`,
      relationship: 'hasMany',
    },

    Plans: {
      sql: `${CUBE}.priceable_id = ${Plans}.id AND ${CUBE}.priceable_type = 'Plan'`,
      relationship: 'belongsTo',
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, stripeId, createdAt, updatedAt],
    },

    unitAmount: {
      sql: `unit_amount`,
      type: `sum`,
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
      sql: `currency`,
      type: `string`,
    },

    priceableType: {
      sql: `priceable_type`,
      type: `string`,
    },

    stripeId: {
      sql: `stripe_id`,
      type: `string`,
    },

    createdAt: {
      sql: `created_at`,
      type: `time`,
    },

    updatedAt: {
      sql: `updated_at`,
      type: `time`,
    },

    archivedAt: {
      sql: `archived_at`,
      type: `time`,
    },

    discardedAt: {
      sql: `discarded_at`,
      type: `time`,
    },
  },

  dataSource: `default`,
});

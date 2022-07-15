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

    amount: {
      type: `sum`,
      sql: 'unit_amount',
      format: 'currency',
      meta: {
        kind: 'currency',
      },
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

    unitAmount: {
      sql: 'unit_amount',
      type: 'number',
      format: 'currency',
      meta: {
        kind: 'currency',
      },
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

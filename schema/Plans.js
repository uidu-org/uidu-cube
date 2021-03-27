cube(`Plans`, {
  sql: `SELECT * FROM plans`,

  joins: {
    SubscriptionItems: {
      sql: `${CUBE}.id = ${SubscriptionItems}.plan_id`,
      relationship: `hasMany`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, stripeId, createdAt, updatedAt],
    },

    amount: {
      sql: `amount`,
      type: `sum`,
    },

    subscriptionsCount: {
      sql: `subscriptions_count`,
      type: `sum`,
    },
  },

  dimensions: {
    currency: {
      sql: `currency`,
      type: `string`,
    },

    description: {
      sql: `description`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    name: {
      sql: `name`,
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
  },
});

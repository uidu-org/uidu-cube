cube(`SubscriptionItems`, {
  sql: `SELECT * FROM subscription_items`,

  joins: {
    Subscriptions: {
      sql: `${CUBE}.subscription_id = ${Subscriptions}.id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt, prorationDate],
    },

    quantity: {
      sql: `quantity`,
      type: `sum`,
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    preferences: {
      sql: `preferences`,
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

    prorationDate: {
      sql: `proration_date`,
      type: `time`,
    },
  },
});

cube(`Subscriptions`, {
  sql: `SELECT * FROM subscriptions`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, stripeId, createdAt, updatedAt],
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    subscriberType: {
      sql: `subscriber_type`,
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

    stripeTrialStart: {
      sql: `stripe_trial_start`,
      type: `time`,
    },

    stripeTrialEnd: {
      sql: `stripe_trial_end`,
      type: `time`,
    },

    stripeCurrentPeriodStart: {
      sql: `stripe_current_period_start`,
      type: `time`,
    },

    stripeCurrentPeriodEnd: {
      sql: `stripe_current_period_end`,
      type: `time`,
    },

    stripeBillingCycleAnchor: {
      sql: `stripe_billing_cycle_anchor`,
      type: `time`,
    },

    stripeCanceledAt: {
      sql: `stripe_canceled_at`,
      type: `time`,
    },

    stripeEndedAt: {
      sql: `stripe_ended_at`,
      type: `time`,
    },
  },
});

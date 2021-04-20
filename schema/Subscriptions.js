/* eslint-disable no-undef */

cube('Subscriptions', {
  sql: 'SELECT * FROM subscriptions',

  extends: ActiveRecordModels,

  joins: {
    Contacts: {
      sql: `${CUBE}.contact_id = ${Contacts}.id`,
      relationship: 'belongsTo',
    },

    SubscriptionItems: {
      sql: `${CUBE}.id = ${SubscriptionItems}.subscription_id`,
      relationship: 'hasMany',
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, stripeId, createdAt, updatedAt],
    },
  },

  dimensions: {
    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
      shown: true,
    },

    stripeId: {
      sql: 'stripe_id',
      type: 'string',
    },

    stripeTrialStart: {
      sql: 'stripe_trial_start',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },

    stripeTrialEnd: {
      sql: 'stripe_trial_end',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },

    stripeCurrentPeriodStart: {
      sql: 'stripe_current_period_start',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },

    stripeCurrentPeriodEnd: {
      sql: 'stripe_current_period_end',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },

    stripeBillingCycleAnchor: {
      sql: 'stripe_billing_cycle_anchor',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },

    stripeCanceledAt: {
      sql: 'stripe_canceled_at',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },

    stripeEndedAt: {
      sql: 'stripe_ended_at',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },
  },
});

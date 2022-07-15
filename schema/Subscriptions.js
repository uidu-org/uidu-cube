/* eslint-disable no-undef */
import { toGlobalId } from './utils';

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

    amount: {
      sql: `${itemsAmount}`,
      type: 'sum',
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Subscription', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
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

    stripeStatus: {
      type: 'string',
      case: {
        when: [
          { sql: `${CUBE}.stripe_status = 90`, label: 'incomplete' },
          { sql: `${CUBE}.stripe_status = 91`, label: 'incomplete_expired' },
          { sql: `${CUBE}.stripe_status = 4`, label: 'unpaid' },
          { sql: `${CUBE}.stripe_status = 3`, label: 'canceled' },
          { sql: `${CUBE}.stripe_status = 2`, label: 'past_due' },
          { sql: `${CUBE}.stripe_status = 1`, label: 'active' },
          { sql: `${CUBE}.stripe_status = 0`, label: 'trialing' },
          { sql: `${CUBE}.stripe_status IS NULL`, label: 'unknown' },
        ],
        else: { label: 'unknown' },
      },
    },

    itemsAmount: {
      sql: `${SubscriptionItems.amount}`,
      type: 'number',
      subQuery: true,
    },
  },

  segments: {
    active: {
      sql: `${CUBE}.stripe_status = 1`,
    },
    canceled: {
      sql: `${CUBE}.stripe_status = 3`,
    },
  },
});

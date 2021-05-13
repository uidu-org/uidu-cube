/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Donations', {
  sql: 'SELECT * FROM donations',

  extends: ActiveRecordModels,

  joins: {
    DonationCampaigns: {
      sql: `${CUBE}.donation_campaign_id = ${DonationCampaigns}.id`,
      relationship: 'belongsTo',
    },

    Contacts: {
      sql: `${CUBE}.contact_id = ${Contacts}.id`,
      relationship: 'belongsTo',
    },

    // OrderItems: {
    //   sql: `${CUBE}.order_item_id = ${OrderItems}.id`,
    //   relationship: `belongsTo`,
    // },

    // TODO: this breaks memberships subscriptions
    // SubscriptionItems: {
    //   sql: `${CUBE}.subscription_item_id = ${SubscriptionItems}.id`,
    //   relationship: `belongsTo`,
    // },
  },

  measures: {
    count: {
      type: 'count',
      sql: 'id',
      meta: {
        kind: 'number',
      },
    },

    totalAmount: {
      sql: 'amount',
      type: 'sum',
      format: 'currency',
      meta: {
        kind: 'currency',
      },
    },

    average: {
      sql: 'amount',
      type: 'avg',
      format: 'currency',
      meta: {
        kind: 'currency',
      },
    },

    max: {
      sql: 'amount',
      type: 'max',
      format: 'currency',
      meta: {
        kind: 'currency',
      },
    },

    contactsCount: {
      sql: 'contact_id',
      type: 'countDistinct',
      title: 'Donors',
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Donation', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    currency: {
      sql: 'currency',
      type: 'string',
      meta: {
        kind: 'string',
      },
    },

    amount: {
      sql: 'amount',
      type: 'number',
      format: 'currency',
      meta: {
        kind: 'currency',
      },
    },

    donationCampaignId: {
      sql: 'donation_campaign_id',
      type: 'number',
    },

    paymentMethod: {
      type: 'string',
      case: {
        when: [
          { sql: `${CUBE}.payment_method = 3`, label: 'Transfer' },
          { sql: `${CUBE}.payment_method = 2`, label: 'Postal' },
          { sql: `${CUBE}.payment_method = 1`, label: 'Check' },
          { sql: `${CUBE}.payment_method = 0`, label: 'Cash' },
          { sql: `${CUBE}.payment_method IS NULL`, label: 'Credit Card' },
        ],
        else: { label: 'Unknown' },
      },
    },

    status: {
      type: 'string',
      case: {
        when: [
          { sql: `${CUBE}.status = 99`, label: 'discarded' },
          { sql: `${CUBE}.status = 50`, label: 'paid' },
          { sql: `${CUBE}.status = 40`, label: 'filled_contact' },
          { sql: `${CUBE}.status = 30`, label: 'filled_preferences' },
          { sql: `${CUBE}.status = 20`, label: 'filled_amount' },
          { sql: `${CUBE}.status = 10`, label: 'initialized' },
          { sql: `${CUBE}.status IS NULL`, label: 'unknown' },
        ],
        else: { label: 'unknown' },
      },
    },

    paidAt: {
      sql: 'paid_at',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },

    refundedAt: {
      sql: 'refunded_at',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },
  },
});

context('AppDonations', {
  contextMembers: [Donations, DonationCampaigns, Subscriptions],
});

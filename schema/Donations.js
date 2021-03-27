/* eslint-disable no-undef */
/* eslint-disable quotes */

cube(`Donations`, {
  sql: `SELECT * FROM donations`,

  joins: {
    DonationCampaigns: {
      sql: `${CUBE}.donation_campaign_id = ${DonationCampaigns}.id`,
      relationship: `belongsTo`,
    },

    Contacts: {
      sql: `${CUBE}.contact_id = ${Contacts}.id`,
      relationship: `belongsTo`,
    },

    OrderItems: {
      sql: `${CUBE}.order_item_id = ${OrderItems}.id`,
      relationship: `belongsTo`,
    },

    SubscriptionItems: {
      sql: `${CUBE}.subscription_item_id = ${SubscriptionItems}.id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt, paidAt],
      meta: {
        kind: 'number',
      },
    },

    totalAmount: {
      sql: `${CUBE}.amount / 100.0`,
      type: `sum`,
      format: `currency`,
      meta: {
        kind: 'currency',
      },
    },

    average: {
      sql: `${CUBE}.amount / 100.0`,
      type: `avg`,
      format: `currency`,
      meta: {
        kind: 'currency',
      },
    },

    max: {
      sql: `${CUBE}.amount / 100.0`,
      type: 'max',
      format: `currency`,
      meta: {
        kind: 'currency',
      },
    },

    contactsCount: {
      sql: 'contact_id',
      type: `countDistinct`,
      title: 'Donors',
    },
  },

  dimensions: {
    id: {
      primaryKey: true,
      shown: true,
      sql: `id`,
      type: `number`,
      meta: {
        kind: 'uid',
      },
    },

    currency: {
      sql: `currency`,
      type: `string`,
      meta: {
        kind: 'string',
      },
    },

    amount: {
      sql: `${CUBE}.amount / 100.0`,
      type: `number`,
      format: `currency`,
      meta: {
        kind: 'currency',
      },
    },

    paymentMethod: {
      type: 'string',
      case: {
        when: [
          { sql: `${CUBE}.payment_method = 3`, label: `Transfer` },
          { sql: `${CUBE}.payment_method = 2`, label: `Postal` },
          { sql: `${CUBE}.payment_method = 1`, label: `Check` },
          { sql: `${CUBE}.payment_method = 0`, label: `Cash` },
          { sql: `${CUBE}.payment_method IS NULL`, label: `Credit Card` },
        ],
        else: { label: `Unknown` },
      },
    },

    preferences: {
      sql: `preferences`,
      type: `string`,
    },

    createdAt: {
      sql: `created_at`,
      type: `time`,
      meta: {
        kind: 'date',
      },
    },

    updatedAt: {
      sql: `updated_at`,
      type: `time`,
      meta: {
        kind: 'date',
      },
    },

    paidAt: {
      sql: `paid_at`,
      type: `time`,
      meta: {
        kind: 'date',
      },
    },

    refundedAt: {
      sql: `refunded_at`,
      type: `time`,
      meta: {
        kind: 'date',
      },
    },
  },
});

context(`AppDonations`, {
  contextMembers: [Donations, DonationCampaigns, Subscriptions],
});

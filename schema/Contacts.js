/* eslint-disable no-undef */

cube('Contacts', {
  sql: 'SELECT * FROM contacts',

  joins: {
    Donations: {
      relationship: 'hasMany',
      sql: `${Contacts}.id = ${Donations}.contact_id`,
    },

    Subscriptions: {
      relationship: 'hasMany',
      sql: `${Contacts}.id = ${Subscriptions}.contact_id`,
    },

    Orders: {
      relationship: 'hasMany',
      sql: `${Contacts}.id = ${Orders}.contact_id`,
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, stripeId, createdAt, updatedAt],
    },

    signInCount: {
      sql: 'sign_in_count',
      type: 'sum',
    },
  },

  dimensions: {
    avatarData: {
      sql: 'avatar_data',
      type: 'string',
    },

    donationsAmount: {
      sql: `${Donations.totalAmount}`,
      type: 'number',
      subQuery: true,
    },

    createdByType: {
      sql: 'created_by_type',
      type: 'string',
    },

    currentSignInIp: {
      sql: 'current_sign_in_ip',
      type: 'string',
    },

    id: {
      shown: true,
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    lastSignInIp: {
      sql: 'last_sign_in_ip',
      type: 'string',
    },

    phone: {
      sql: 'phone',
      type: 'string',
    },

    preferences: {
      sql: 'preferences',
      type: 'string',
    },

    stripeId: {
      sql: 'stripe_id',
      type: 'string',
    },

    summary: {
      sql: 'summary',
      type: 'string',
    },

    website: {
      sql: 'website',
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

    currentSignInAt: {
      sql: 'current_sign_in_at',
      type: 'time',
    },

    lastRequestAt: {
      sql: 'last_request_at',
      type: 'time',
    },

    lastSignInAt: {
      sql: 'last_sign_in_at',
      type: 'time',
    },
  },
});

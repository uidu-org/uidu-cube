/* eslint-disable no-undef */

cube('Contacts', {
  sql: `SELECT * FROM contacts`,

  joins: {
    Donations: {
      relationship: 'hasMany',
      sql: `${CUBE}.id = ${Donations}.contact_id`,
    },

    Subscriptions: {
      relationship: 'hasMany',
      sql: `${CUBE}.id = ${Subscriptions}.contact_id`,
    },

    Orders: {
      relationship: 'hasMany',
      sql: `${CUBE}.id = ${Orders}.contact_id`,
    },

    Organizations: {
      relationship: 'hasOne',
      sql: `${CUBE}.contactable_id = ${Organizations}.id AND ${CUBE}.contactable_type = 'Organization'`,
    },

    Users: {
      relationship: 'hasOne',
      sql: `${CUBE}.contactable_id = ${Users}.id AND ${CUBE}.contactable_type = 'User'`,
    },

    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.workspace_id = ${Workspaces}.id`,
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
    id: {
      shown: true,
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    avatar: {
      sql: `CONCAT('https://uidu.local:8443/uploads/', ${CUBE}.avatar_data->>"$.derivatives.small.id")`,
      type: 'string',
      format: 'imageUrl',
      meta: {
        kind: 'avatar',
      },
    },

    avatarData: {
      sql: 'avatar_data',
      type: 'string',
    },

    donationsAmount: {
      sql: `${Donations.totalAmount}`,
      type: 'number',
      subQuery: true,
    },

    currentSignInIp: {
      sql: 'current_sign_in_ip',
      type: 'string',
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

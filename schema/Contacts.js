/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Contacts', {
  sql: 'SELECT * FROM contacts',

  extends: ActiveRecordModels,

  joins: {
    Addresses: {
      relationship: 'hasMany',
      sql: `${Addresses}.addressable_id = ${CUBE}.id AND ${Addresses}.addressable_type = 'Contact'`,
    },

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

    Taggings: {
      relationship: 'hasMany',
      sql: `${Taggings}.taggable_id = ${CUBE}.id AND ${Taggings}.taggable_type = 'Contact'`,
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
      sql: `${toGlobalId('Contact', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    avatar: {
      sql: `${CUBE}.avatar_data->>"$.derivatives.xsmall.id"`,
      type: 'string',
      format: 'imageUrl',
      meta: {
        kind: 'avatar',
      },
    },

    email: {
      sql: 'email',
      type: 'string',
      meta: {
        kind: 'email',
      },
    },

    name: {
      type: 'string',
      case: {
        when: [
          {
            sql: `${CUBE}.contactable_type = 'User'`,
            label: { sql: `${Users}.first_name` },
          },
          {
            sql: `${CUBE}.contactable_type = 'Organization'`,
            label: { sql: `${Organizations}.name` },
          },
        ],
        else: { label: 'Unknown' },
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

  segments: {
    real: {
      sql: `${CUBE}.contactable_type = 'User' AND ${Users.kind} = 1 OR ${CUBE}.contactable_type = 'Organization'`,
    },
  },
});

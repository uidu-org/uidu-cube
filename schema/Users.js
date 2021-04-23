/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Users', {
  sql: 'SELECT * FROM users',

  extends: ActiveRecordModels,

  joins: {
    Contacts: {
      relationship: 'hasOne',
      sql: `${Users}.id = ${Contacts}.contactable_id AND ${Contacts}.contactable_type = 'User'`,
    },
  },

  measures: {
    count: {
      sql: 'id',
      type: 'count',
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('User', 'users.id')}`,
      type: 'number',
      primaryKey: true,
    },

    donationsAmount: {
      sql: `${Donations.totalAmount}`,
      type: 'number',
      subQuery: true,
    },

    avatar: {
      sql: `CONCAT('${SECURITY_CONTEXT.asset_url.unsafeValue()}', ${Contacts}.avatar_data->>"$.derivatives.small.id")`,
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

    firstName: {
      sql: 'first_name',
      type: 'string',
      meta: {
        kind: 'string',
      },
    },

    lastName: {
      sql: 'last_name',
      type: 'string',
      meta: {
        kind: 'string',
      },
    },
  },

  segments: {
    people: {
      sql: `${CUBE}.kind = 1`,
    },
    leads: {
      sql: `${CUBE}.kind = 0`,
    },
  },
});

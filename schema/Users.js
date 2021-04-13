/* eslint-disable no-undef */

cube('Users', {
  sql: 'SELECT * FROM users',

  joins: {
    Contacts: {
      relationship: 'hasOne',
      sql: `${Users}.id = ${Contacts}.contactable_id AND ${Contacts}.contactable_type = 'User'`,
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, createdAt, updatedAt],
    },
  },

  dimensions: {
    donationsAmount: {
      sql: `${Donations.totalAmount}`,
      type: 'number',
      subQuery: true,
    },

    id: {
      shown: true,
      sql: 'id',
      type: 'number',
      primaryKey: true,
      meta: {
        kind: 'uid',
        primary: true,
      },
    },

    avatar: {
      sql: `CONCAT('https://uidu.local:8443/uploads/', ${Contacts}.avatar_data->>"$.derivatives.small.id")`,
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

    createdAt: {
      sql: 'created_at',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },

    updatedAt: {
      sql: 'updated_at',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },
  },
});

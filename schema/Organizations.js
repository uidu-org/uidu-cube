/* eslint-disable no-undef */

cube('Organizations', {
  sql: 'SELECT * FROM organizations',

  extends: ActiveRecordModels,

  joins: {
    Contacts: {
      relationship: 'hasOne',
      sql: `${Organizations}.id = ${Contacts}.contactable_id AND ${Contacts}.contactable_type = 'Organization'`,
    },

    // Workspaces: {
    //   sql: `${CUBE}.workspace_id = ${Workspaces}.id`,
    //   relationship: 'belongsTo',
    // },
  },

  measures: {
    count: {
      sql: 'id',
      type: 'count',
    },
  },

  dimensions: {
    bio: {
      sql: 'bio',
      type: 'string',
    },

    email: {
      sql: 'email',
      type: 'string',
    },

    fax: {
      sql: 'fax',
      type: 'string',
    },

    fiscalCode: {
      sql: 'fiscal_code',
      type: 'string',
    },

    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
      shown: true,
    },

    avatar: {
      sql: `${Contacts}.avatar_data->>"$.derivatives.small.id"`,
      type: 'string',
      format: 'imageUrl',
      meta: {
        kind: 'avatar',
      },
    },

    name: {
      sql: 'name',
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

    shortname: {
      sql: 'shortname',
      type: 'string',
    },

    vatCode: {
      sql: 'vat_code',
      type: 'string',
    },

    website: {
      sql: 'website',
      type: 'string',
    },
  },
});

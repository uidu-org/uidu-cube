/* eslint-disable no-undef */
import { toGlobalId } from './utils';

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
    id: {
      shown: true,
      sql: `${toGlobalId('Organization', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    bio: {
      sql: 'bio',
      type: 'string',
    },

    email: {
      sql: `${Contacts}.email`,
      type: 'string',
      meta: {
        kind: 'email',
      },
    },

    website: {
      sql: `${Contacts}.website`,
      type: 'string',
      meta: {
        kind: 'url',
      },
    },

    fiscalCode: {
      sql: 'fiscal_code',
      type: 'string',
    },

    avatar: {
      sql: `${Contacts}.avatar_data->>"$.derivatives.xsmall.id"`,
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
      sql: `${Contacts}.phone`,
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
  },
});

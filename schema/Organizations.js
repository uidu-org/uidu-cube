/* eslint-disable no-undef */

cube('Organizations', {
  sql: 'SELECT * FROM organizations',

  joins: {
    Workspaces: {
      sql: `${CUBE}.workspace_id = ${Workspaces}.id`,
      relationship: 'belongsTo',
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, name, shortname, createdAt, updatedAt],
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

    createdAt: {
      sql: 'created_at',
      type: 'time',
    },

    updatedAt: {
      sql: 'updated_at',
      type: 'time',
    },
  },

  dataSource: 'default',
});

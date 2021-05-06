/* eslint-disable no-undef */

cube('Products', {
  sql: 'SELECT * FROM products',

  joins: {
    Skus: {
      sql: `${CUBE}.id = ${Skus}.product_id`,
      relationship: 'hasMany',
    },

    Plans: {
      sql: `${CUBE}.id = ${Plans}.product_id`,
      relationship: 'hasMany',
    },

    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.workspace_id = ${Workspaces}.id`,
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, name, stripeId, createdByType, createdAt, updatedAt],
    },
  },

  dimensions: {
    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    productableType: {
      sql: 'productable_type',
      type: 'string',
    },

    name: {
      sql: 'name',
      type: 'string',
    },

    description: {
      sql: 'description',
      type: 'string',
    },

    stripeId: {
      sql: 'stripe_id',
      type: 'string',
    },

    stripeStatementDescriptor: {
      sql: 'stripe_statement_descriptor',
      type: 'string',
    },

    stripePackageDimensions: {
      sql: 'stripe_package_dimensions',
      type: 'string',
    },

    stripeAttributes: {
      sql: 'stripe_attributes',
      type: 'string',
    },

    preferences: {
      sql: 'preferences',
      type: 'string',
    },

    createdByType: {
      sql: 'created_by_type',
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

  segments: {
    membership: {
      sql: `${CUBE}.kind = 0`,
    },
    donation: {
      sql: `${CUBE}.kind = 1`,
    },
    good: {
      sql: `${CUBE}.kind = 2`,
    },
    ticket: {
      sql: `${CUBE}.kind = 3`,
    },
    service: {
      sql: `${CUBE}.kind = 4`,
    },
  },
});

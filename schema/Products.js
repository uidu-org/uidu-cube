/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Products', {
  sql: 'SELECT * FROM products',

  extends: ActiveRecordModels,

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
      drillMembers: [id, name, stripeId, createdAt, updatedAt],
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Product', `${CUBE}.id`)}`,
      type: 'string',
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

    kind: {
      type: 'string',
      case: {
        when: [
          { sql: `${CUBE}.kind = 4`, label: 'service' },
          { sql: `${CUBE}.kind = 3`, label: 'ticket' },
          { sql: `${CUBE}.kind = 2`, label: 'good' },
          { sql: `${CUBE}.kind = 1`, label: 'donation' },
          { sql: `${CUBE}.kind = 0`, label: 'membership' },
          { sql: `${CUBE}.kind IS NULL`, label: 'unknown' },
        ],
        else: { label: 'unknown' },
      },
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
    forStore: {
      sql: `${CUBE}.kind IN (2, 4)`,
    },
  },
});

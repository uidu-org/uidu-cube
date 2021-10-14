/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Orders', {
  sql: 'SELECT * FROM orders',

  extends: ActiveRecordModels,

  joins: {
    Contacts: {
      sql: `${CUBE}.contact_id = ${Contacts}.id`,
      relationship: 'belongsTo',
    },

    OrderItems: {
      sql: `${CUBE}.id = ${OrderItems}.order_id`,
      relationship: 'hasMany',
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, createdAt, updatedAt],
    },

    orderItemsCount: {
      sql: 'items_count',
      type: 'sum',
    },

    orderItemsTotal: {
      sql: 'items_total',
      type: 'sum',
    },

    stripeAmount: {
      sql: 'amount',
      type: 'sum',
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Order', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    currency: {
      sql: 'currency',
      type: 'string',
    },

    itemsTotal: {
      sql: 'items_total',
      type: 'number',
      format: 'currency',
      meta: {
        kind: 'currency',
      },
    },

    itemsCount: {
      sql: 'items_count',
      type: 'number',
    },

    number: {
      sql: 'number',
      type: 'string',
    },

    status: {
      type: 'string',
      case: {
        when: [
          { sql: `${CUBE}.status = 99`, label: 'discarded' },
          { sql: `${CUBE}.status = 90`, label: 'refunded' },
          { sql: `${CUBE}.status = 50`, label: 'paid' },
          { sql: `${CUBE}.status = 40`, label: 'placed' },
          { sql: `${CUBE}.status = 20`, label: 'expired' },
          { sql: `${CUBE}.status = 10`, label: 'initialized' },
          { sql: `${CUBE}.status IS NULL`, label: 'unknown' },
        ],
        else: { label: 'unknown' },
      },
    },
  },

  segments: {
    paid: {
      sql: `${CUBE}.status = 50`,
    },
  },
});

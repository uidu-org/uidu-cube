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
  },
});

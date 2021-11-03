/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('OrderItems', {
  sql: 'SELECT * FROM order_items',

  extends: ActiveRecordModels,

  joins: {
    Orders: {
      sql: `${CUBE}.order_id = ${Orders}.id`,
      relationship: 'belongsTo',
    },

    Skus: {
      sql: `${CUBE}.sku_id = ${Skus}.id`,
      relationship: 'belongsTo',
    },

    Attendances: {
      sql: `${Attendances}.order_item_id = ${CUBE}.id`,
      relationship: 'hasMany',
    },

    Bookings: {
      sql: `${Bookings}.order_item_id = ${CUBE}.id`,
      relationship: 'hasMany',
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, createdAt, updatedAt],
    },

    quantity: {
      sql: 'quantity',
      type: 'sum',
    },

    amount: {
      sql: 'amount',
      type: 'sum',
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('OrderItem', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    description: {
      sql: 'description',
      type: 'string',
    },

    currency: {
      sql: 'currency',
      type: 'string',
    },
  },
});

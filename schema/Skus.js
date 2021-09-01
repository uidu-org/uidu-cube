/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Skus', {
  sql: 'SELECT * FROM skus',

  extends: ActiveRecordModels,

  joins: {
    OrderItems: {
      sql: `${CUBE}.id = ${OrderItems}.sku_id`,
      relationship: 'hasMany',
    },

    Products: {
      sql: `${CUBE}.product_id = ${Products}.id`,
      relationship: 'belongsTo',
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, createdAt, updatedAt],
    },

    price: {
      sql: 'price',
      type: 'sum',
    },

    inventoryQuantity: {
      sql: 'inventory_quantity',
      type: 'sum',
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Sku', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    name: {
      sql: 'name',
      type: 'string',
    },

    description: {
      sql: 'name',
      type: 'string',
    },

    currency: {
      sql: 'currency',
      type: 'string',
    },

    beginsAt: {
      sql: 'begins_at',
      type: 'time',
    },

    finishesAt: {
      sql: 'finishes_at',
      type: 'time',
    },
  },
});

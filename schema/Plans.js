/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Plans', {
  sql: 'SELECT * FROM plans',

  extends: ActiveRecordModels,

  joins: {
    SubscriptionItems: {
      sql: `${CUBE}.id = ${SubscriptionItems}.plan_id`,
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
      drillMembers: [id, name, stripeId, createdAt, updatedAt],
    },

    subscriptionsCount: {
      sql: 'subscriptions_count',
      type: 'sum',
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Plan', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    description: {
      sql: 'description',
      type: 'string',
    },

    name: {
      sql: 'name',
      type: 'string',
    },

    stripeId: {
      sql: 'stripe_id',
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
});

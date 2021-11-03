/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Bookings', {
  sql: 'SELECT * FROM bookings',

  extends: ActiveRecordModels,

  joins: {
    ServiceInstances: {
      sql: `${CUBE}.bookable_id = ${ServiceInstances}.id AND ${CUBE}.bookable_type = 'ServiceInstance'`,
      relationship: 'belongsTo',
    },

    OrderItems: {
      sql: `${CUBE}.order_item_id = ${OrderItems}.id`,
      relationship: 'belongsTo',
    },

    Contacts: {
      sql: `${CUBE}.contact_id = ${Contacts}.id`,
      relationship: 'belongsTo',
    },

    // ServiceInstances: {
    //   sql: `${CUBE}.id = ${ServiceInstances}.id`,
    //   relationship: 'belongsTo',
    // },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, createdAt, updatedAt],
    },

    bookingItemsCount: {
      sql: 'items_count',
      type: 'sum',
    },

    bookingItemsTotal: {
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
      sql: `${toGlobalId('Booking', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    currency: {
      sql: 'currency',
      type: 'string',
    },

    // itemsTotal: {
    //   sql: 'items_total',
    //   type: 'number',
    //   format: 'currency',
    //   meta: {
    //     kind: 'currency',
    //   },
    // },

    // itemsCount: {
    //   sql: 'items_count',
    //   type: 'number',
    // },

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

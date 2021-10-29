/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('ServiceInstances', {
  sql: 'SELECT * FROM service_instances',

  extends: ActiveRecordModels,

  joins: {
    Services: {
      sql: `${CUBE}.service_id = ${Services}.id`,
      relationship: 'belongsTo',
    },

    Bookings: {
      sql: `${CUBE}.id = ${Bookings}.bookable_id AND ${Bookings}.bookable_type = 'ServiceInstance'`,
      relationship: 'hasMany',
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, createdAt, updatedAt],
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('ServiceInstance', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    startTime: {
      sql: 'start_time',
      type: 'string',
    },

    endTime: {
      sql: 'end_time',
      type: 'string',
    },

    startDate: {
      sql: 'start_date',
      type: 'time',
    },

    endDate: {
      sql: 'end_date',
      type: 'time',
    },

    cancelledAt: {
      sql: 'cancelled_at',
      type: 'time',
    },

    postponedAt: {
      sql: 'postponed_at',
      type: 'time',
    },
  },
});

/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('EventInstances', {
  sql: 'SELECT * FROM event_instances',

  extends: ActiveRecordModels,

  joins: {
    Events: {
      sql: `${CUBE}.event_id = ${Events}.id`,
      relationship: 'belongsTo',
    },

    Products: {
      sql: `${CUBE}.id = ${Products}.productable_id AND ${Products}.productable_type = 'EventInstance'`,
      relationship: 'hasMany',
    },

    Attendances: {
      sql: `${CUBE}.id = ${Attendances}.attendable_id AND ${Attendances}.attendable_type = 'EventInstance'`,
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
      sql: `${toGlobalId('EventInstance', `${CUBE}.id`)}`,
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

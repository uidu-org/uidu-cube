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

    beginTime: {
      sql: 'begin_time',
      type: 'string',
    },

    endTime: {
      sql: 'end_time',
      type: 'string',
    },

    beginsAt: {
      sql: 'begins_at',
      type: 'time',
    },

    cancelledAt: {
      sql: 'cancelled_at',
      type: 'time',
    },

    finishesAt: {
      sql: 'finishes_at',
      type: 'time',
    },

    postponedAt: {
      sql: 'postponed_at',
      type: 'time',
    },
  },
});

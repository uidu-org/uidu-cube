/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Attendances', {
  sql: 'SELECT * FROM attendances',

  extends: ActiveRecordModels,

  joins: {
    EventInstances: {
      sql: `${CUBE}.attendable_id = ${Events}.id AND ${CUBE}.attendable_type = 'EventInstance'`,
      relationship: 'belongsTo',
    },

    Contacts: {
      sql: `${CUBE}.contact_id = ${Contacts}.id`,
      relationship: 'belongsTo',
    },

    OrderItems: {
      sql: `${CUBE}.order_item_id = ${OrderItems}.id`,
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
      sql: `${toGlobalId('Attendance', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    checkedInAt: {
      sql: 'checked_in_at',
      type: 'time',
    },
  },
});

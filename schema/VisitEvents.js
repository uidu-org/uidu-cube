/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('VisitEvents', {
  sql: 'SELECT * FROM visit_events',

  joins: {
    Visits: {
      sql: `${CUBE}.visit_id = ${Visits}.id`,
      relationship: 'belongsTo',
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, name],
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('VisitEvent', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    name: {
      sql: 'name',
      type: 'string',
    },

    gid: {
      sql: `${VisitEvents}.properties->>"$.gid"`,
      type: 'string',
    },

    kind: {
      sql: `${VisitEvents}.properties->>"$.kind"`,
      type: 'string',
    },

    properties: {
      sql: 'properties',
      type: 'string',
    },

    userType: {
      sql: 'user_type',
      type: 'string',
    },

    time: {
      sql: 'time',
      type: 'time',
    },
  },
});

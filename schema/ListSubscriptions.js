/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('ListSubscriptions', {
  sql: 'SELECT * FROM list_subscriptions',

  extends: ActiveRecordModels,

  joins: {
    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.workspace_id = ${Workspaces}.id`,
    },

    Lists: {
      sql: `${CUBE}.list_id = ${Lists}.id`,
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
      sql: `${toGlobalId('ListSubscription', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },
  },
});

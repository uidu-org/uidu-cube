/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Models', {
  sql: 'SELECT * FROM models',

  extends: ActiveRecordModels,

  joins: {
    WorkspaceApps: {
      sql: `${CUBE}.workspace_app_id = ${WorkspaceApps}.id`,
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
      sql: `${toGlobalId('Field', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },
  },
});

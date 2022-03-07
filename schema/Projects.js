/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Projects', {
  sql: 'SELECT * FROM projects',

  extends: ActiveRecordModels,

  joins: {
    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.workspace_id = ${Workspaces}.id`,
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, name, createdAt, updatedAt],
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Proposal', `${CUBE}.id`)}`,
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

    domain: {
      sql: 'domain',
      type: 'string',
    },
  },
});

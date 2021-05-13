/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Proposals', {
  sql: 'SELECT * FROM proposals',

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

    estimatedCost: {
      sql: 'estimated_cost',
      type: 'number',
    },

    goal: {
      sql: 'goal',
      type: 'number',
    },

    name: {
      sql: 'name',
      type: 'string',
    },
  },
});

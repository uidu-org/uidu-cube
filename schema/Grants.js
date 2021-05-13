/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Grants', {
  sql: 'SELECT * FROM grants',

  extends: ActiveRecordModels,

  joins: {
    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.workspace_id = ${Workspaces}.id`,
    },

    GrantMakers: {
      relationship: 'belongsTo',
      sql: `${CUBE}.grant_maker_id = ${GrantMakers}.id`,
    },

    GrantCompetences: {
      relationship: 'hasMany',
      sql: `${CUBE}.id = ${GrantCompetences}.competent_id AND ${GrantCompetences}.competent_type = 'Grant'`,
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
      sql: `${toGlobalId('Grant', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    bodyData: {
      sql: 'body_data',
      type: 'string',
    },

    name: {
      sql: 'name',
      type: 'string',
    },

    website: {
      sql: 'website',
      type: 'string',
    },

    coverage: {
      sql: 'coverage',
      type: 'number',
    },

    budget: {
      sql: 'budget',
      type: 'number',
    },

    contributionMin: {
      sql: 'contribution_min',
      type: 'number',
    },

    contributionMax: {
      sql: 'contribution_max',
      type: 'number',
    },

    kind: {
      type: 'string',
      case: {
        when: [
          { sql: `${CUBE}.kind = 1`, label: 'contribution' },
          { sql: `${CUBE}.kind = 0`, label: 'grant' },
          { sql: `${CUBE}.kind IS NULL`, label: 'unknown' },
        ],
        else: { label: 'unknown' },
      },
    },

    expiresAt: {
      sql: 'expires_at',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },

    publishedAt: {
      sql: 'published_at',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },

    synchedAt: {
      sql: 'synched_at',
      type: 'time',
      meta: {
        kind: 'date',
      },
    },
  },
});

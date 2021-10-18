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

    contribution: {
      type: 'sum',
      sql: 'contribution_max',
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
          { sql: `${CUBE}.kind = 5`, label: 'is_donation' },
          { sql: `${CUBE}.kind = 4`, label: 'is_contest' },
          { sql: `${CUBE}.kind = 3`, label: 'is_at_the_counter' },
          { sql: `${CUBE}.kind = 2`, label: 'is_public_notice' },
          { sql: `${CUBE}.kind = 1`, label: 'is_contribution' },
          { sql: `${CUBE}.kind = 0`, label: 'is_grant' },
          { sql: `${CUBE}.kind IS NULL`, label: 'unknown' },
        ],
        else: { label: 'unknown' },
      },
    },

    status: {
      type: 'string',
      case: {
        when: [
          { sql: `${CUBE}.status = 99`, label: 'discarded' },
          { sql: `${CUBE}.status = 40`, label: 'approved' },
          { sql: `${CUBE}.status = 30`, label: 'waiting_for_review' },
          { sql: `${CUBE}.status = 20`, label: 'kept' },
          { sql: `${CUBE}.status = 10`, label: 'received' },
          { sql: `${CUBE}.status IS NULL`, label: 'unknown' },
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

  segments: {
    monitoring: {
      sql: `${CUBE}.status = 10`,
    },
    kept: {
      sql: `${CUBE}.status > 10 AND ${CUBE}.status < 99`,
    },
  },
});

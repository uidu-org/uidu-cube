/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('ProposalGrants', {
  sql: 'SELECT * FROM proposal_grants',

  extends: ActiveRecordModels,

  joins: {
    Proposals: {
      relationship: 'belongsTo',
      sql: `${CUBE}.proposal_id = ${Proposals}.id`,
    },

    Grants: {
      relationship: 'belongsTo',
      sql: `${CUBE}.grant_id = ${Grants}.id`,
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
      sql: `${toGlobalId('ProposalGrant', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    status: {
      type: 'string',
      case: {
        when: [
          { sql: `${CUBE}.status = 99`, label: 'discarded' },
          { sql: `${CUBE}.status = 40`, label: 'lost' },
          { sql: `${CUBE}.status = 30`, label: 'won' },
          { sql: `${CUBE}.status = 20`, label: 'submitted' },
          { sql: `${CUBE}.status = 18`, label: 'ready' },
          { sql: `${CUBE}.status = 15`, label: 'approved' },
          { sql: `${CUBE}.status = 10`, label: 'saved' },
          { sql: `${CUBE}.status IS NULL`, label: 'unknown' },
        ],
        else: { label: 'unknown' },
      },
    },
  },

  segments: {
    discarded: {
      sql: `${CUBE}.status = 99`,
    },
    notDiscarded: {
      sql: `${CUBE}.status < 99`,
    },
  },
});

/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Votes', {
  sql: 'SELECT * FROM votes',

  extends: ActiveRecordModels,

  joins: {
    Contacts: {
      relationship: 'belongsTo',
      sql: `${Contacts}.id = ${CUBE}.voter_id AND ${CUBE}.voter_type = 'Contact'`,
    },

    Grants: {
      relationship: 'belongsTo',
      sql: `${Grants}.id = ${CUBE}.votable_id AND ${CUBE}.votable_type = 'Grant'`,
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
      sql: `${toGlobalId('Vote', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    votableType: {
      sql: 'votable_type',
      type: 'string',
    },

    voterType: {
      sql: 'voter_type',
      type: 'string',
    },

    voteScope: {
      sql: 'vote_scope',
      type: 'string',
    },

    createdAt: {
      sql: 'created_at',
      type: 'time',
    },

    updatedAt: {
      sql: 'updated_at',
      type: 'time',
    },
  },

  dataSource: 'default',
});

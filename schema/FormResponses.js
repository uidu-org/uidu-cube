/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('FormResponses', {
  sql: 'SELECT * FROM form_responses',

  extends: ActiveRecordModels,

  joins: {
    Contacts: {
      sql: `${CUBE}.contact_id = ${Contacts}.id`,
      relationship: 'belongsTo',
    },

    Forms: {
      sql: `${CUBE}.form_id = ${Forms}.id`,
      relationship: 'belongsTo',
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, createdAt, updatedAt],
    },

    answersCount: {
      sql: 'answers_count',
      type: 'sum',
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('FormResponse', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    responsableType: {
      sql: 'responsable_type',
      type: 'string',
    },

    completedAt: {
      sql: 'completed_at',
      type: 'time',
    },

    status: {
      type: 'string',
      case: {
        when: [
          { sql: `${CUBE}.status = 99`, label: 'discarded' },
          { sql: `${CUBE}.status = 50`, label: 'completed' },
          { sql: `${CUBE}.status = 10`, label: 'initialized' },
          { sql: `${CUBE}.status IS NULL`, label: 'unknown' },
        ],
        else: { label: 'unknown' },
      },
    },
  },

  segments: {
    completed: {
      sql: `${CUBE}.status = 50`,
    },
  },
});

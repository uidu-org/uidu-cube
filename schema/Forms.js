/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Forms', {
  sql: 'SELECT * FROM forms',

  extends: ActiveRecordModels,

  joins: {
    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.workspace_id = ${Workspaces}.id`,
    },

    FormResponses: {
      relationship: 'hasMany',
      sql: `${FormResponses}.form_id = ${CUBE}.id`,
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, name, createdAt, updatedAt],
    },

    questionsCount: {
      sql: 'questions_count',
      type: 'sum',
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Form', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    description: {
      sql: 'description',
      type: 'string',
    },

    formableType: {
      sql: 'formable_type',
      type: 'string',
    },

    name: {
      sql: 'name',
      type: 'string',
    },
  },
});

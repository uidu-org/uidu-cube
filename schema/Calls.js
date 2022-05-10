/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Calls', {
  sql: 'SELECT * FROM calls',

  extends: ActiveRecordModels,

  joins: {
    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.owner_id = ${Workspaces}.id AND ${CUBE}.owner_type = 'Workspace'`,
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, name, createdAt, updatedAt],
    },

    applicationsCount: {
      sql: 'applications_count',
      type: 'sum',
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Call', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    cover: {
      sql: `${CUBE}.cover_data->>"$.derivatives.small.id"`,
      type: 'string',
      format: 'imageUrl',
      meta: {
        kind: 'cover',
      },
    },

    name: {
      sql: 'name',
      type: 'string',
    },

    type: {
      sql: 'type',
      type: 'string',
    },

    expiresAt: {
      sql: 'expires_at',
      type: 'time',
    },

    publishedAt: {
      sql: 'published_at',
      type: 'time',
    },
  },
});

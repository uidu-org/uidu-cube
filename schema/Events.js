/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Events', {
  sql: 'SELECT * FROM events',

  extends: ActiveRecordModels,

  joins: {
    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.owner_id = ${Workspaces}.id AND ${CUBE}.owner_type = 'Workspace'`,
    },

    EventInstances: {
      relationship: 'hasMany',
      sql: `${EventInstances}.event_id = ${CUBE}.id`,
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
      sql: `${toGlobalId('Event', `${CUBE}.id`)}`,
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

    publishedAt: {
      sql: 'published_at',
      type: 'time',
    },
  },
});

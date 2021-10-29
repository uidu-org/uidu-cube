/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Services', {
  sql: 'SELECT * FROM services',

  extends: ActiveRecordModels,

  joins: {
    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.workspace_id = ${Workspaces}.id`,
    },

    ServiceInstances: {
      relationship: 'hasMany',
      sql: `${ServiceInstances}.service_id = ${CUBE}.id`,
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
      sql: `${toGlobalId('Service', `${CUBE}.id`)}`,
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

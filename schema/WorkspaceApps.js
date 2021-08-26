/* eslint-disable no-undef */

cube('WorkspaceApps', {
  sql: 'SELECT * FROM workspace_apps',

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
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    name: {
      sql: 'name',
      type: 'string',
    },

    preferences: {
      sql: 'preferences',
      type: 'string',
    },

    slug: {
      sql: 'slug',
      type: 'string',
    },

    version: {
      sql: 'version',
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

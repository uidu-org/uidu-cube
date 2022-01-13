cube('Lists', {
  sql: 'SELECT * FROM lists',

  joins: {
    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.workspace_id = ${Workspaces}.id`,
    },

    Campaigns: {
      relationship: 'belongsTo',
      sql: `${CUBE}.campaign_id = ${Campaigns}.id`,
    },

    ListSubscriptions: {
      sql: `${CUBE}.id = ${ListSubscriptions}.list_id`,
      relationship: 'hasMany',
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

    createdAt: {
      sql: 'created_at',
      type: 'time',
    },

    updatedAt: {
      sql: 'updated_at',
      type: 'time',
    },
  },
});

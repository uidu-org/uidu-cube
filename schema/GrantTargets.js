cube(`GrantTargets`, {
  sql: `SELECT * FROM grant_targets`,

  joins: {
    Grants: {
      sql: `${CUBE}.grant_id = ${Grants}.id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id],
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },
  },
});

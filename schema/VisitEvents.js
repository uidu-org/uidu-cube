cube(`VisitEvents`, {
  sql: `SELECT * FROM visit_events`,

  joins: {
    Visits: {
      sql: `${CUBE}.visit_id = ${Visits}.id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name],
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    name: {
      sql: `name`,
      type: `string`,
    },

    properties: {
      sql: `properties`,
      type: `string`,
    },

    userType: {
      sql: `user_type`,
      type: `string`,
    },

    time: {
      sql: `time`,
      type: `time`,
    },
  },

  dataSource: `default`,
});

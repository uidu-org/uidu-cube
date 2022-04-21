cube(`AdministrativeCompetences`, {
  sql: `SELECT * FROM administrative_competences`,

  joins: {
    Grants: {
      sql: `${CUBE}.grant_id = ${Grants}.id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt],
    },
  },

  dimensions: {
    code: {
      sql: `code`,
      type: `string`,
    },

    competentType: {
      sql: `competent_type`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    label: {
      sql: `label`,
      type: `string`,
    },

    createdAt: {
      sql: `created_at`,
      type: `time`,
    },

    updatedAt: {
      sql: `updated_at`,
      type: `time`,
    },
  },
});

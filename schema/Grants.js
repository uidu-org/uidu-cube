cube(`Grants`, {
  sql: `SELECT * FROM grants`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt],
    },
  },

  dimensions: {
    abstract: {
      sql: `abstract`,
      type: `string`,
    },

    bodyData: {
      sql: `body_data`,
      type: `string`,
    },

    cachedGrantSectorList: {
      sql: `cached_grant_sector_list`,
      type: `string`,
    },

    cachedGrantTagList: {
      sql: `cached_grant_tag_list`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    name: {
      sql: `name`,
      type: `string`,
    },

    submitterType: {
      sql: `submitter_type`,
      type: `string`,
    },

    website: {
      sql: `website`,
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

    expiresAt: {
      sql: `expires_at`,
      type: `time`,
    },

    publishedAt: {
      sql: `published_at`,
      type: `time`,
    },

    submittedAt: {
      sql: `submitted_at`,
      type: `time`,
    },

    synchedAt: {
      sql: `synched_at`,
      type: `time`,
    },
  },
});

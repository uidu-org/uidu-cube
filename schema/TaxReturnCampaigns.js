cube(`TaxReturnCampaigns`, {
  sql: `SELECT * FROM tax_return_campaigns`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdAt, updatedAt],
    },

    taxReturnCampaignRemindersCount: {
      sql: `tax_return_campaign_reminders_count`,
      type: `sum`,
    },

    viewsCount: {
      sql: `views_count`,
      type: `sum`,
    },
  },

  dimensions: {
    cover: {
      sql: `cover`,
      type: `string`,
    },

    coverData: {
      sql: `cover_data`,
      type: `string`,
    },

    description: {
      sql: `description`,
      type: `string`,
    },

    descriptionRaw: {
      sql: `description_raw`,
      type: `string`,
    },

    fiscalCode: {
      sql: `fiscal_code`,
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

    preferences: {
      sql: `preferences`,
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

    publishedAt: {
      sql: `published_at`,
      type: `time`,
    },
  },

  dataSource: `default`,
});

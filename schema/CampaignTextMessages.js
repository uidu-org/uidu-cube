cube(`CampaignTextMessages`, {
  sql: `SELECT * FROM campaign_text_messages`,

  joins: {
    Campaigns: {
      sql: `${CUBE}.campaign_id = ${Campaigns}.id`,
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
    body: {
      sql: `body`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    number: {
      sql: `number`,
      type: `string`,
    },

    token: {
      sql: `token`,
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

    deliveredAt: {
      sql: `delivered_at`,
      type: `time`,
    },

    failedAt: {
      sql: `failed_at`,
      type: `time`,
    },

    sentAt: {
      sql: `sent_at`,
      type: `time`,
    },
  },
});

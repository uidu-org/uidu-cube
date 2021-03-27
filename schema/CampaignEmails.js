cube(`CampaignEmails`, {
  sql: `SELECT * FROM campaign_emails`,

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
    bodyHtml: {
      sql: `body_html`,
      type: `string`,
    },

    bodyText: {
      sql: `body_text`,
      type: `string`,
    },

    email: {
      sql: `email`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
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

    clickedAt: {
      sql: `clicked_at`,
      type: `time`,
    },

    convertedAt: {
      sql: `converted_at`,
      type: `time`,
    },

    dismissedAt: {
      sql: `dismissed_at`,
      type: `time`,
    },

    seenAt: {
      sql: `seen_at`,
      type: `time`,
    },

    sentAt: {
      sql: `sent_at`,
      type: `time`,
    },
  },
});

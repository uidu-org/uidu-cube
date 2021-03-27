cube(`Campaigns`, {
  sql: `SELECT * FROM campaigns`,

  joins: {
    Audiences: {
      sql: `${CUBE}.audience_id = ${Audiences}.id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [
        emailFromName,
        id,
        innerName,
        name,
        textMessageFromName,
        createdAt,
        updatedAt,
      ],
    },
  },

  dimensions: {
    cachedCampaignTagList: {
      sql: `cached_campaign_tag_list`,
      type: `string`,
    },

    campaignableType: {
      sql: `campaignable_type`,
      type: `string`,
    },

    emailBody: {
      sql: `email_body`,
      type: `string`,
    },

    emailBodyData: {
      sql: `email_body_data`,
      type: `string`,
    },

    emailFromEmail: {
      sql: `email_from_email`,
      type: `string`,
    },

    emailFromName: {
      sql: `email_from_name`,
      type: `string`,
    },

    emailReplyTo: {
      sql: `email_reply_to`,
      type: `string`,
    },

    emailSubject: {
      sql: `email_subject`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    innerName: {
      sql: `inner_name`,
      type: `string`,
    },

    name: {
      sql: `name`,
      type: `string`,
    },

    textMessageBody: {
      sql: `text_message_body`,
      type: `string`,
    },

    textMessageFromName: {
      sql: `text_message_from_name`,
      type: `string`,
    },

    textMessageFromNumber: {
      sql: `text_message_from_number`,
      type: `string`,
    },

    type: {
      sql: `type`,
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

    scheduledAt: {
      sql: `scheduled_at`,
      type: `time`,
    },
  },
});

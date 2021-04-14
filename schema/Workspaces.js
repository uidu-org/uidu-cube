cube(`Workspaces`, {
  sql: `SELECT * FROM workspaces`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, stripeId, createdAt, updatedAt],
    },
  },

  dimensions: {
    avatarData: {
      sql: `avatar_data`,
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

    stripeBillingDetails: {
      sql: `stripe_billing_details`,
      type: `string`,
    },

    stripeId: {
      sql: `stripe_id`,
      type: `string`,
    },

    subdomain: {
      sql: `subdomain`,
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

  dataSource: `default`,
});

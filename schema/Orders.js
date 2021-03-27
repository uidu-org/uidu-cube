cube(`Orders`, {
  sql: `SELECT * FROM orders`,

  joins: {
    Contacts: {
      sql: `${CUBE}.contact_id = ${Contacts}.id`,
      relationship: `belongsTo`,
    },

    OrderItems: {
      sql: `${CUBE}.id = ${OrderItems}.order_id`,
      relationship: `hasMany`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt],
    },

    orderItemsCount: {
      sql: `items_count`,
      type: `sum`,
    },

    orderItemsTotal: {
      sql: `items_total`,
      type: `sum`,
    },

    stripeAmount: {
      sql: `amount`,
      type: `sum`,
    },
  },

  dimensions: {
    currency: {
      sql: `currency`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
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

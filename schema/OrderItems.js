cube(`OrderItems`, {
  sql: `SELECT * FROM order_items`,

  joins: {
    Orders: {
      sql: `${CUBE}.order_id = ${Orders}.id`,
      relationship: `belongsTo`,
    },

    Skus: {
      sql: `${CUBE}.sku_id = ${Skus}.id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdAt, updatedAt],
    },

    quantity: {
      sql: `quantity`,
      type: `sum`,
    },

    amount: {
      sql: `amount`,
      type: `sum`,
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    description: {
      sql: `description`,
      type: `string`,
    },

    currency: {
      sql: `currency`,
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

cube(`Skus`, {
  sql: `SELECT * FROM skus`,

  joins: {
    OrderItems: {
      sql: `${CUBE}.id = ${OrderItems}.sku_id`,
      relationship: `hasMany`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdByType, createdAt, updatedAt],
    },

    price: {
      sql: `price`,
      type: `sum`,
    },

    inventoryQuantity: {
      sql: `inventory_quantity`,
      type: `sum`,
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    stripeAttributes: {
      sql: `stripe_attributes`,
      type: `string`,
    },

    currency: {
      sql: `currency`,
      type: `string`,
    },

    createdByType: {
      sql: `created_by_type`,
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

    beginsAt: {
      sql: `begins_at`,
      type: `time`,
    },

    finishesAt: {
      sql: `finishes_at`,
      type: `time`,
    },
  },
});

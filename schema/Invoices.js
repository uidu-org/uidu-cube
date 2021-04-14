cube(`Invoices`, {
  sql: `SELECT * FROM invoices`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [
        customerCity,
        customerCompanyName,
        customerCountry,
        customerFirstName,
        customerLastName,
        id,
        stripeChargeId,
        stripeCustomerId,
        stripeSourceId,
        createdAt,
        updatedAt,
        paidAt,
      ],
    },

    grossPrice: {
      sql: `gross_price`,
      type: `sum`,
    },

    netPrice: {
      sql: `net_price`,
      type: `sum`,
    },

    number: {
      sql: `number`,
      type: `sum`,
    },

    vatPrice: {
      sql: `vat_price`,
      type: `sum`,
    },
  },

  dimensions: {
    code: {
      sql: `code`,
      type: `string`,
    },

    currency: {
      sql: `currency`,
      type: `string`,
    },

    customerAddress: {
      sql: `customer_address`,
      type: `string`,
    },

    customerCity: {
      sql: `customer_city`,
      type: `string`,
    },

    customerCompanyName: {
      sql: `customer_company_name`,
      type: `string`,
    },

    customerCountry: {
      sql: `customer_country`,
      type: `string`,
    },

    customerFirstName: {
      sql: `customer_first_name`,
      type: `string`,
    },

    customerFiscalCode: {
      sql: `customer_fiscal_code`,
      type: `string`,
    },

    customerLastName: {
      sql: `customer_last_name`,
      type: `string`,
    },

    customerProvince: {
      sql: `customer_province`,
      type: `string`,
    },

    customerVatCode: {
      sql: `customer_vat_code`,
      type: `string`,
    },

    customerZip: {
      sql: `customer_zip`,
      type: `string`,
    },

    description: {
      sql: `description`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    stripeChargeId: {
      sql: `stripe_charge_id`,
      type: `string`,
    },

    stripeCustomerId: {
      sql: `stripe_customer_id`,
      type: `string`,
    },

    stripeSourceExpMonth: {
      sql: `stripe_source_exp_month`,
      type: `string`,
    },

    stripeSourceExpYear: {
      sql: `stripe_source_exp_year`,
      type: `string`,
    },

    stripeSourceId: {
      sql: `stripe_source_id`,
      type: `string`,
    },

    stripeSourceLast4: {
      sql: `stripe_source_last4`,
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

    paidAt: {
      sql: `paid_at`,
      type: `time`,
    },
  },

  dataSource: `default`,
});

/* eslint-disable no-undef */
cube('DonationCampaigns', {
  sql: 'SELECT * FROM donation_campaigns',

  joins: {
    Products: {
      sql: `${CUBE}.id = ${Products}.productable_id AND ${Products}.productable_type = 'DonationCamapaign'`,
      relationship: 'hasMany',
    },

    Donations: {
      sql: `${CUBE}.id = ${Donations}.donation_campaign_id`,
      relationship: 'hasMany',
    },

    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.workspace_id = ${Workspaces}.id`,
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, name, createdAt, updatedAt],
    },

    donationsAmount: {
      sql: 'donations_amount',
      type: 'sum',
    },

    donationsCount: {
      sql: 'donations_count',
      type: 'sum',
    },

    viewsCount: {
      sql: 'views_count',
      type: 'sum',
    },
  },

  dimensions: {
    category: {
      sql: 'category',
      type: 'string',
    },

    cover: {
      sql: `CONCAT('https://uidu.local:8443/uploads/', ${CUBE}.cover_data->>"$.derivatives.small.id")`,
      type: 'string',
      format: 'imageUrl',
    },

    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    name: {
      sql: 'name',
      type: 'string',
    },

    abstract: {
      sql: 'abstract',
      type: 'string',
    },

    goal: {
      sql: 'goal',
      type: 'number',
    },

    currency: {
      sql: 'currency',
      type: 'number',
    },

    kind: {
      type: 'string',
      case: {
        when: [
          { sql: `${CUBE}.kind = 1`, label: 'Target' },
          { sql: `${CUBE}.kind = 0`, label: 'Classic' },
          { sql: `${CUBE}.kind IS NULL`, label: 'Classic' },
        ],
        else: { label: 'Unknown' },
      },
    },

    createdAt: {
      sql: 'created_at',
      type: 'time',
    },

    updatedAt: {
      sql: 'updated_at',
      type: 'time',
    },

    finishesAt: {
      sql: 'finishes_at',
      type: 'time',
    },

    publishedAt: {
      sql: 'published_at',
      type: 'time',
    },
  },
});

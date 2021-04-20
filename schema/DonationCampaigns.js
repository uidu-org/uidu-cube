/* eslint-disable no-undef */
cube('DonationCampaigns', {
  sql: 'SELECT * FROM donation_campaigns',

  extends: ActiveRecordModels,

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

    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    cover: {
      sql: `CONCAT('https://uidu.local:8443/uploads/', ${CUBE}.cover_data->>"$.derivatives.small.id")`,
      type: 'string',
      format: 'imageUrl',
      meta: {
        kind: 'cover',
      },
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
      meta: {
        kind: 'currency',
      },
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

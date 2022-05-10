/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('DonationCampaigns', {
  sql: 'SELECT * FROM donation_campaigns',

  extends: ActiveRecordModels,

  joins: {
    Donations: {
      sql: `${CUBE}.id = ${Donations}.donation_campaign_id`,
      relationship: 'hasMany',
    },

    Products: {
      sql: `${CUBE}.id = ${Products}.productable_id AND ${Products}.productable_type = 'DonationCampaign'`,
      relationship: 'hasMany',
    },

    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.owner_id = ${Workspaces}.id AND ${CUBE}.ower_type = 'Workspace'`,
    },
  },

  measures: {
    count: {
      type: 'count',
      sql: 'id',
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('DonationCampaign', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    category: {
      sql: 'category',
      type: 'string',
    },

    cover: {
      sql: `${CUBE}.cover_data->>"$.derivatives.small.id"`,
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

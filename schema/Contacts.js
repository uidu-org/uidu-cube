cube('Contacts', {
  sql: 'SELECT * FROM contacts',

  joins: {
    Donations: {
      relationship: 'hasMany',
      sql: `${Contacts}.id = ${Donations}.contact_id`,
    },

    Orders: {
      relationship: 'hasMany',
      sql: `${Contacts}.id = ${Orders}.contact_id`,
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [
        createdByType,
        displayName,
        firstName,
        id,
        lastName,
        stripeCustomerId,
        createdAt,
        updatedAt,
      ],
    },

    applicationsCount: {
      sql: 'applications_count',
      type: 'sum',
    },

    attendancesCount: {
      sql: 'attendances_count',
      type: 'sum',
    },

    commentsCount: {
      sql: 'comments_count',
      type: 'sum',
    },

    donationsCount: {
      sql: 'donations_count',
      type: 'sum',
    },

    signInCount: {
      sql: 'sign_in_count',
      type: 'sum',
    },

    taxReturnCampaignGiversCount: {
      sql: 'tax_return_campaign_givers_count',
      type: 'sum',
    },
  },

  dimensions: {
    avatarData: {
      sql: 'avatar_data',
      type: 'string',
    },

    donationsAmount: {
      sql: `${Donations.totalAmount}`,
      type: 'number',
      subQuery: true,
    },

    cachedContactGroupList: {
      sql: 'cached_contact_group_list',
      type: 'string',
    },

    cachedContactTagList: {
      sql: 'cached_contact_tag_list',
      type: 'string',
    },

    createdByType: {
      sql: 'created_by_type',
      type: 'string',
    },

    currentSignInIp: {
      sql: 'current_sign_in_ip',
      type: 'string',
    },

    displayName: {
      sql: 'display_name',
      type: 'string',
    },

    email: {
      sql: 'email',
      type: 'string',
    },

    firstName: {
      sql: 'first_name',
      type: 'string',
    },

    id: {
      shown: true,
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    lastName: {
      sql: 'last_name',
      type: 'string',
    },

    lastSignInIp: {
      sql: 'last_sign_in_ip',
      type: 'string',
    },

    phone: {
      sql: 'phone',
      type: 'string',
    },

    preferences: {
      sql: 'preferences',
      type: 'string',
    },

    stripeCustomerId: {
      sql: 'stripe_customer_id',
      type: 'string',
    },

    summary: {
      sql: 'summary',
      type: 'string',
    },

    type: {
      sql: 'type',
      type: 'string',
    },

    website: {
      sql: 'website',
      type: 'string',
    },

    createdAt: {
      sql: 'created_at',
      type: 'time',
    },

    updatedAt: {
      sql: 'updated_at',
      type: 'time',
    },

    currentSignInAt: {
      sql: 'current_sign_in_at',
      type: 'time',
    },

    lastRequestAt: {
      sql: 'last_request_at',
      type: 'time',
    },

    lastSignInAt: {
      sql: 'last_sign_in_at',
      type: 'time',
    },
  },
});

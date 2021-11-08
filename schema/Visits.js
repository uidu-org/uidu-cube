/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Visits', {
  sql: 'SELECT * FROM visits',

  extends: ActiveRecordModels,

  joins: {
    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.tenant_id = ${Workspaces}.id`,
    },

    Users: {
      relationship: 'belongsTo',
      sql: `${CUBE}.user_id = ${Users}.id`,
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [city, country, id],
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Visit', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    browser: {
      sql: 'browser',
      type: 'string',
    },

    city: {
      sql: 'city',
      type: 'string',
    },

    country: {
      sql: 'country',
      type: 'string',
    },

    deviceType: {
      sql: 'device_type',
      type: 'string',
    },

    ip: {
      sql: 'ip',
      type: 'string',
    },

    landingPage: {
      sql: 'landing_page',
      type: 'string',
    },

    latitude: {
      sql: 'latitude',
      type: 'string',
    },

    longitude: {
      sql: 'longitude',
      type: 'string',
    },

    os: {
      sql: 'os',
      type: 'string',
    },

    postalCode: {
      sql: 'postal_code',
      type: 'string',
    },

    referrer: {
      sql: 'referrer',
      type: 'string',
    },

    referringDomain: {
      sql: 'referring_domain',
      type: 'string',
    },

    region: {
      sql: 'region',
      type: 'string',
    },

    searchKeyword: {
      sql: 'search_keyword',
      type: 'string',
    },

    userAgent: {
      sql: 'user_agent',
      type: 'string',
    },

    userType: {
      sql: 'user_type',
      type: 'string',
    },

    utmCampaign: {
      sql: 'utm_campaign',
      type: 'string',
    },

    utmContent: {
      sql: 'utm_content',
      type: 'string',
    },

    utmMedium: {
      sql: 'utm_medium',
      type: 'string',
    },

    utmSource: {
      sql: 'utm_source',
      type: 'string',
    },

    utmTerm: {
      sql: 'utm_term',
      type: 'string',
    },

    visitToken: {
      sql: 'visit_token',
      type: 'string',
    },

    visitorToken: {
      sql: 'visitor_token',
      type: 'string',
    },

    startedAt: {
      sql: 'started_at',
      type: 'time',
    },
  },

  dataSource: 'default',
});

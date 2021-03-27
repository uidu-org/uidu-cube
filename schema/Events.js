/* eslint-disable no-undef */
cube('Events', {
  sql: 'SELECT * FROM events',

  joins: {},

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, name, createdAt, updatedAt],
    },
  },

  dimensions: {
    bodyData: {
      sql: 'body_data',
      type: 'string',
    },

    cachedEventTagList: {
      sql: 'cached_event_tag_list',
      type: 'string',
    },

    cover: {
      sql: 'cover',
      type: 'string',
    },

    coverData: {
      sql: 'cover_data',
      type: 'string',
    },

    description: {
      sql: 'description',
      type: 'string',
    },

    descriptionRaw: {
      sql: 'description_raw',
      type: 'string',
    },

    hashtag: {
      sql: 'hashtag',
      type: 'string',
    },

    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    leaflet: {
      sql: 'leaflet',
      type: 'string',
    },

    name: {
      sql: 'name',
      type: 'string',
    },

    preferences: {
      sql: 'preferences',
      type: 'string',
    },

    timezone: {
      sql: 'timezone',
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

    publishedAt: {
      sql: 'published_at',
      type: 'time',
    },
  },
});

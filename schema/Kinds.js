/* eslint-disable no-undef */

import { toGlobalId } from './utils';

cube(`Kinds`, {
  sql: `SELECT * FROM kinds`,

  extends: ActiveRecordModels,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, nameIt, nameEn, shortname, createdAt, updatedAt],
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Kind', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    model: {
      sql: `model`,
      type: `string`,
    },

    name: {
      sql: `name`,
      type: `string`,
    },

    nameIt: {
      sql: `${CUBE}.name->>"$.it"`,
      type: `string`,
    },

    nameEn: {
      sql: `${CUBE}.name->>"$.en"`,
      type: `string`,
    },

    namePluralIt: {
      sql: `${CUBE}.name_plural->>"$.it"`,
      type: `string`,
    },

    namePluralEn: {
      sql: `${CUBE}.name_plural->>"$.en"`,
      type: `string`,
    },

    descriptionIt: {
      sql: `${CUBE}.description->>"$.it"`,
      type: `string`,
    },

    descriptionEn: {
      sql: `${CUBE}.description->>"$.en"`,
      type: `string`,
    },

    preferences: {
      sql: `preferences`,
      type: `string`,
    },

    shortname: {
      sql: `shortname`,
      type: `string`,
    },
  },

  dataSource: `default`,
});

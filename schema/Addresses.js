/* eslint-disable no-undef */

cube('Addresses', {
  sql: 'SELECT * FROM addresses',

  joins: {},

  measures: {
    count: {
      type: 'count',
      drillMembers: [
        city,
        countryCode,
        id,
        name,
        placeId,
        createdAt,
        updatedAt,
      ],
    },
  },

  dimensions: {
    address: {
      sql: 'address',
      type: 'string',
    },

    addressableType: {
      sql: 'addressable_type',
      type: 'string',
    },

    administrativeAreaLevel1: {
      sql: 'administrative_area_level_1',
      type: 'string',
      title: 'Administrative Area Level 1',
    },

    administrativeAreaLevel1Code: {
      sql: 'administrative_area_level_1_code',
      type: 'string',
      title: 'Administrative Area Level 1 Code',
    },

    administrativeAreaLevel2: {
      sql: 'administrative_area_level_2',
      type: 'string',
      title: 'Administrative Area Level 2',
    },

    administrativeAreaLevel2Code: {
      sql: 'administrative_area_level_2_code',
      type: 'string',
      title: 'Administrative Area Level 2 Code',
    },

    administrativeAreaLevel3: {
      sql: 'administrative_area_level_3',
      type: 'string',
      title: 'Administrative Area Level 3',
    },

    administrativeAreaLevel3Code: {
      sql: 'administrative_area_level_3_code',
      type: 'string',
      title: 'Administrative Area Level 3 Code',
    },

    administrativeAreaLevel4: {
      sql: 'administrative_area_level_4',
      type: 'string',
      title: 'Administrative Area Level 4',
    },

    administrativeAreaLevel4Code: {
      sql: 'administrative_area_level_4_code',
      type: 'string',
      title: 'Administrative Area Level 4 Code',
    },

    administrativeAreaLevel5: {
      sql: 'administrative_area_level_5',
      type: 'string',
      title: 'Administrative Area Level 5',
    },

    administrativeAreaLevel5Code: {
      sql: 'administrative_area_level_5_code',
      type: 'string',
      title: 'Administrative Area Level 5 Code',
    },

    city: {
      sql: 'city',
      type: 'string',
    },

    countryCode: {
      sql: 'country_code',
      type: 'string',
    },

    formattedAddress: {
      sql: 'formatted_address',
      type: 'string',
    },

    id: {
      sql: 'id',
      type: 'number',
      primaryKey: true,
    },

    latitude: {
      sql: 'latitude',
      type: 'string',
    },

    longitude: {
      sql: 'longitude',
      type: 'string',
    },

    name: {
      sql: 'name',
      type: 'string',
    },

    placeId: {
      sql: 'place_id',
      type: 'string',
    },

    postalCode: {
      sql: 'postal_code',
      type: 'string',
    },

    streetAddress: {
      sql: 'street_address',
      type: 'string',
    },

    streetNumber: {
      sql: 'street_number',
      type: 'string',
    },

    types: {
      sql: 'types',
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
  },

  dataSource: 'default',
});

/* eslint-disable no-undef */
import { toGlobalId } from './utils';

cube('Stories', {
  sql: 'SELECT * FROM stories',

  extends: ActiveRecordModels,

  joins: {
    Workspaces: {
      relationship: 'belongsTo',
      sql: `${CUBE}.owner_id = ${Workspaces}.id AND ${CUBE}.owner_type = 'Workspace'`,
    },

    VisitEvents: {
      relationship: 'hasMany',
      sql: `JSON_UNQUOTE(JSON_EXTRACT(${VisitEvents}.properties, "$.gid")) = ${CUBE.id}`,
    },
  },

  measures: {
    count: {
      type: 'count',
      drillMembers: [id, name, seoTitle, createdAt, updatedAt],
    },

    commentsCount: {
      sql: 'comments_count',
      type: 'sum',
    },

    fbSharesCount: {
      sql: 'fb_shares_count',
      type: 'sum',
    },

    twSharesCount: {
      sql: 'tw_shares_count',
      type: 'sum',
    },

    viewsCount: {
      sql: 'views_count',
      type: 'sum',
    },
  },

  dimensions: {
    id: {
      shown: true,
      sql: `${toGlobalId('Story', `${CUBE}.id`)}`,
      type: 'string',
      primaryKey: true,
    },

    abstract: {
      sql: 'abstract',
      type: 'string',
    },

    // cachedStoryTagList: {
    //   sql: 'cached_story_tag_list',
    //   type: 'string',
    // },

    cover: {
      sql: `${Stories}.cover_data->>"$.derivatives.small.id"`,
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

    seoKeyword: {
      sql: 'seo_keyword',
      type: 'string',
    },

    seoMetaDescription: {
      sql: 'seo_meta_description',
      type: 'string',
    },

    seoTitle: {
      sql: 'seo_title',
      type: 'string',
    },

    publishedAt: {
      sql: 'published_at',
      type: 'time',
    },
  },
});

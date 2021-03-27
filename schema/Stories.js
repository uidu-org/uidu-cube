cube(`Stories`, {
  sql: `SELECT * FROM stories`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, seoTitle, createdAt, updatedAt],
    },

    commentsCount: {
      sql: `comments_count`,
      type: `sum`,
    },

    fbSharesCount: {
      sql: `fb_shares_count`,
      type: `sum`,
    },

    twSharesCount: {
      sql: `tw_shares_count`,
      type: `sum`,
    },

    viewsCount: {
      sql: `views_count`,
      type: `sum`,
    },
  },

  dimensions: {
    abstract: {
      sql: `abstract`,
      type: `string`,
    },

    body: {
      sql: `body`,
      type: `string`,
    },

    bodyData: {
      sql: `body_data`,
      type: `string`,
    },

    bodyRaw: {
      sql: `body_raw`,
      type: `string`,
    },

    cachedStoryTagList: {
      sql: `cached_story_tag_list`,
      type: `string`,
    },

    cover: {
      sql: `cover`,
      type: `string`,
    },

    coverData: {
      sql: `cover_data`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    importedAlternativePermalink: {
      sql: `imported_alternative_permalink`,
      type: `string`,
    },

    importedHtml: {
      sql: `imported_html`,
      type: `string`,
    },

    importedPermalink: {
      sql: `imported_permalink`,
      type: `string`,
    },

    name: {
      sql: `name`,
      type: `string`,
    },

    seoKeyword: {
      sql: `seo_keyword`,
      type: `string`,
    },

    seoMetaDescription: {
      sql: `seo_meta_description`,
      type: `string`,
    },

    seoTitle: {
      sql: `seo_title`,
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

    featuredAt: {
      sql: `featured_at`,
      type: `time`,
    },

    importedAt: {
      sql: `imported_at`,
      type: `time`,
    },

    listedAt: {
      sql: `listed_at`,
      type: `time`,
    },

    publishedAt: {
      sql: `published_at`,
      type: `time`,
    },
  },
});

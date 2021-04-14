// Cube.js configuration options: https://cube.dev/docs/config
module.exports = {
  http: {
    cors: {
      origin: [/\.uidu.local/, /\.uidu.dev/, /localhost/],
    },
  },
  queryTransformer: (query, { securityContext }) => {
    if (securityContext.workspace_id) {
      query.filters.push({
        member: 'Workspaces.id',
        operator: 'equals',
        values: [securityContext.workspace_id],
      });
    }
    return query;
  },
};

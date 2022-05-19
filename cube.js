module.exports = {
  http: {
    cors: {
      origin: [
        /\.uidu.local/,
        /\.uidu.dev$/,
        /localhost/,
        /\.uidu.org$/,
        /uidu-org\.cubecloud.dev$/,
      ],
    },
  },
  queryRewrite: (query, { securityContext }) => {
    if (securityContext && securityContext.workspace_id) {
      query.filters.push({
        member: 'Workspaces.id',
        operator: 'equals',
        values: [securityContext.workspace_id],
      });
    }
    return query;
  },
};

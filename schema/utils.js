export const toGlobalId = (model, column) =>
  `REPLACE(TO_BASE64(CONCAT("gid://uidu/${model}/", ${column})), "=", "")`;

export const toModelName = () => {};

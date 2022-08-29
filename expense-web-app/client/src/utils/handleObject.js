export const groupBy = (needed, key) => {
  if (!Array.isArray(needed)) return;
  return needed.reduce((rs, item) => {
    (rs[item[key]] = rs[item[key]] || []).push(item);
    return rs;
  }, {});
};

export const getSingleGroupBy = (needed, key, value) => {
  if (!Array.isArray(needed)) return;
  return needed.filter((item) => item[key] === value);
};

const queryToObject = (query: string) => {
  if (!query) return {};
  const search = query.split("?")[1];
  const listQuery = search.split("&");

  const queryObj: any = {};

  listQuery.forEach((el) => {
    if (el.split("=")[1]) {
      const objKey = el.split("=")[0];
      const objValue = el.split("=")[1];
      queryObj[objKey] = objValue.replace("%20", " ");
    }
  });
  return queryObj;
};

export default queryToObject;

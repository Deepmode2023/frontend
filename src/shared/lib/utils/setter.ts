const grepObject = (obj: any, key: string | number) => {
  const jsonObj = JSON.stringify(obj);
  const regExp = new RegExp(`"${key}":`, "ig");
  const slicedJsonObj = jsonObj.slice(regExp.exec(jsonObj)?.index);

  console.log(slicedJsonObj);
  return {};
};

export { grepObject };

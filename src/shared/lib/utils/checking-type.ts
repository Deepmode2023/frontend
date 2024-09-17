const isArray = (obj: any) => {
  if (!obj) return false;
  return Object.getPrototypeOf(obj).constructor.name === "Array";
};

const isObject = (obj: any) => {
  if (!obj) return false;
  return Object.getPrototypeOf(obj).constructor.name === "Object";
};

export { isArray, isObject };

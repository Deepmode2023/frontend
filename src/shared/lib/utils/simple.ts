type PrototypeNameType =
  | "Array"
  | "Object"
  | "Number"
  | "String"
  | "Symbol"
  | "Function"
  | "Unknown";

const getObjectPrototypeName = (obj: any): PrototypeNameType => {
  const prototype = obj && Object.getPrototypeOf(obj).constructor.name;
  return prototype ?? "Unknown";
};

export { getObjectPrototypeName };

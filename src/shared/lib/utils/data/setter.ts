import { getPath } from "./object";
import set from "lodash.set";
import get from "lodash.get";
import { getObjectPrototypeName } from "../simple";

type TotalInsertFieldProps = {
  insertedKey: string;
  value: any;
};

type InsertFieldToObjectPropsType = TotalInsertFieldProps & {
  obj: Record<string, any>;
};

type InsertFieldToArrayPropsType = TotalInsertFieldProps & {
  obj: Array<Record<string, any>>;
  replaceAll: boolean;
};

type InsertFieldPropsType = TotalInsertFieldProps & {
  obj: Record<string, any> | Array<Record<string, any>>;
  replaceAll?: boolean;
};

const insertFieldToObject = ({
  obj,
  insertedKey,
  value,
}: InsertFieldToObjectPropsType) => {
  obj = structuredClone(obj);
  const path = getPath({
    searchedObject: obj,
    searchKey: insertedKey,
    withKey: true,
  });

  if (!path) return obj;

  return set(obj, path, value);
};

const insertFieldToArray = ({
  obj,
  insertedKey,
  value,
  replaceAll,
}: InsertFieldToArrayPropsType) => {
  obj = structuredClone(obj);
  const insertedAreaObj: Record<string, any> = replaceAll ? obj : obj[0];
  const path = getPath({
    searchedObject: insertedAreaObj,
    searchKey: insertedKey,
  });

  if (replaceAll) {
    return set(insertedAreaObj, path, value);
  }

  return [set(insertedAreaObj, path, value), ...obj.slice(1)];
};

const insertField = ({
  obj,
  insertedKey,
  value,
  replaceAll = false,
}: InsertFieldPropsType) => {
  switch (getObjectPrototypeName(obj)) {
    case "Array":
      return insertFieldToArray({
        obj: obj as InsertFieldToArrayPropsType["obj"],
        insertedKey,
        value,
        replaceAll,
      });
    case "Object":
      return insertFieldToObject({ obj, insertedKey, value });
    default:
      return obj;
  }
};

const mergeFieldInObject = ({
  obj,
  insertedKey,
  value,
}: InsertFieldPropsType) => {};

const mergeField = ({}) => {
  return {};
};

export { insertField, mergeField };

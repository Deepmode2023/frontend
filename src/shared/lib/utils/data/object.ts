import Stack from "../data-structure/stack/stack";
import get from "lodash.get";

type ObjectKeyType = string | number;

interface IGetPathInObjectProps {
  searchKey: ObjectKeyType;
  searchedObject: Record<ObjectKeyType, any>;
  withKey?: boolean;
  isAllMatches?: boolean;
}

interface IRecursiveObjectProps {
  obj: Record<ObjectKeyType, any>;
  searchKey: ObjectKeyType;
  path: Array<string>;
  pathInstance: Array<string>;
}

const returnPathWithKey = (
  withKey: boolean,
  path: string,
  searchedKey: IGetPathInObjectProps["searchKey"]
) => {
  const keyAsString = String(searchedKey);

  if (withKey && !path.includes(keyAsString)) {
    return `${path}.${keyAsString}`;
  }

  return withKey ? path : path.replace(`.${keyAsString}`, "");
};

const returnedPathToString = (
  prevPath: string,
  currentPath: string
): string => {
  const formattedPath = /^\d+$/.test(currentPath)
    ? `[${currentPath}]`
    : currentPath;
  return `${prevPath}.${formattedPath}`;
};

const getPathInObject = ({
  searchKey,
  searchedObject,
  withKey = false,
  isAllMatches = false,
}: IGetPathInObjectProps): Array<string> => {
  const pathsStack = new Stack<string>();
  const resultPaths: Array<string> = [];

  if (
    typeof searchedObject !== "object" ||
    !searchedObject ||
    (typeof searchKey !== "string" && typeof searchKey !== "number")
  ) {
    return [];
  }

  Object.keys(searchedObject)
    .reverse()
    .forEach((key) => pathsStack.push(key));

  while (!pathsStack.isEmpty()) {
    const path = pathsStack.pop()!;
    const deeplyObj = get(searchedObject, path);

    if (!path.includes(String(searchKey))) {
      if (deeplyObj && typeof deeplyObj === "object") {
        Object.keys(deeplyObj)
          .reverse()
          .forEach((deepKey) => {
            pathsStack.push(returnedPathToString(path, deepKey));
          });
      }
      continue;
    }

    resultPaths.push(returnPathWithKey(withKey, path, searchKey));

    if (!isAllMatches) {
      break;
    }
  }

  return resultPaths;
};

const getPath = (
  props: Omit<IGetPathInObjectProps, "isAllMatches">
): string => {
  return getPathInObject({ ...props, isAllMatches: false })[0] ?? "";
};

const getPaths = (
  props: Omit<IGetPathInObjectProps, "isAllMatches">
): Array<string> => getPathInObject({ ...props, isAllMatches: true });

export { getPaths, getPath };

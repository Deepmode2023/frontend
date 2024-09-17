// import get from "lodash.get";
// import set from "lodash.set";
// import { getPath } from "./object";
// import { getObjectPrototypeName } from "../simple";

// //ADD FIELD TO EXIST
// const addFieldToExistingOnes = (
//   findObjectKey,
//   checkObjectValue,
//   addFieldKey,
//   addFieldValue,
//   existingDataInstanse = []
// ) => {
//   let returnedData, path;

//   switch (getObjectPrototypeName(existingDataInstanse)) {
//     case "Array":
//       returnedData = existingDataInstanse.map((exist) => {
//         const checkObject =
//           get(exist, getPath(findObjectKey, exist, null)) === checkObjectValue;

//         if (checkObject) {
//           path = getPath(addFieldKey, exist, null);

//           set(exist, path, addFieldValue);
//         }
//         return exist;
//       });

//       return returnedData;
//     case "Object":
//       path = getPathInObject(addFieldKey, existingDataInstanse, null);

//       set(existingDataInstanse, path, addFieldValue);

//       return existingDataInstanse;
//   }
// };

// export { addFieldToExistingOnes };

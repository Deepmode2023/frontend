import { useRef } from "react";
import { isEqual } from "../utils/comperator";

const usePrevious = <T>(value: T) => {
  const ref = useRef<{ value: T; prev: null | T }>({
    value: value,
    prev: null,
  });

  const current = ref.current.value;

  const isNotEqual = (): boolean => {
    return !isEqual(current, ref.current.prev);
  };

  if (!isEqual(value, current)) {
    ref.current = {
      value: value,
      prev: current,
    };
  }

  return { previous: ref.current.prev, isNotEqual };
};

export { usePrevious };

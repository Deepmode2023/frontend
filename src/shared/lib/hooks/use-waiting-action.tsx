import { useState } from "react";

export const useWaitingAction = <TPromiseParams, TPromiseReturn>(
  action: (params: TPromiseParams) => Promise<TPromiseReturn>
) => {
  const [loading, setLoading] = useState(false);

  const onAction = async (params: TPromiseParams) => {
    setLoading(true);
    const result = await action(params);
    setLoading(false);

    return result;
  };

  return { loading, onAction };
};

function throttle(callback: Function, timmer: number) {
  let lastRun: number, timerID: number;
  return function (...args: any) {
    /* @ts-ignore */
    const context = this;

    if (!lastRun) {
      setTimeout(() => {
        callback.apply(context, args);
        lastRun = Date.now();
      }, timmer);
    } else {
      clearInterval(timerID);
      /* @ts-ignore */
      timerID = setTimeout(() => {
        callback.apply(context, args);
        lastRun = Date.now();
      }, timmer - (Date.now() - lastRun));
    }
  };
}

export { throttle };

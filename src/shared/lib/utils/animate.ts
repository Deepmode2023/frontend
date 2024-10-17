type DirectionAnimateType = "left" | "right" | "random";
type MeasureAnimateDirectionType = "vh" | "vw" | "%";

function randomDirection() {
  return Math.round(Math.random()) < 1 ? -1 : 1;
}

function animationDirection(
  direction: DirectionAnimateType,
  measure: MeasureAnimateDirectionType
) {
  if (direction !== "random") {
    return direction === "left" ? `-100${measure}` : `100${measure}`;
  }

  const r = randomDirection();

  return `${r * 100}${measure}`;
}

type Milliseconds = number;

function AnimationFrame(
  time: Milliseconds,
  doneCallback: (markTime: number) => void,
  frameCallback?: (markTime: number) => boolean
) {
  if (!window?.requestAnimationFrame)
    console.warn("Instance window doesn`t exist 'requestAnimationFrame'!!");

  let startAnimate: number | undefined, previousTimeStamp: number | undefined;
  let done = false;

  function step(timeStamp: number) {
    if (startAnimate === undefined) {
      startAnimate = timeStamp;
    }

    const markTime = timeStamp - startAnimate;
    if (previousTimeStamp !== timeStamp && frameCallback) {
      done = frameCallback(markTime);
    }

    if (markTime < time) {
      if (done) {
        doneCallback(markTime);
        return;
      }
      window.requestAnimationFrame(step);
    } else {
      doneCallback(markTime);
    }
  }

  window.requestAnimationFrame(step);
}

export { animationDirection, AnimationFrame, randomDirection };
export type { MeasureAnimateDirectionType, DirectionAnimateType, Milliseconds };

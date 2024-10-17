import Paper from "@mui/material/Paper";
import {
  PropsWithChildren,
  useEffect,
  useState,
  Children,
  isValidElement,
  cloneElement,
  useMemo,
} from "react";
import { useAnimate, usePresence, motion } from "framer-motion";
import { animationDirection, type DirectionAnimateType } from "shared";
import { DefaultFormInner } from "./defaultForm";

export type FormPaperPropsType = PropsWithChildren & {
  directionAnimate?: DirectionAnimateType;
};

const PaperMotion = motion(Paper);

const FormPaper = ({
  children,
  directionAnimate = "random",
}: FormPaperPropsType) => {
  const [scope, animate] = useAnimate();
  const [childAnimate, setChildAnimate] = useState(false);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    async function presenseAnimate() {
      await animate(
        scope.current,
        { y: "100vh", opacity: 0 },
        { duration: 0.01 }
      );
      await animate(
        scope.current,
        { y: 0, opacity: 1 },
        { duration: 0.5, delay: 0.6 }
      );
    }

    async function exitAnimate() {
      await animate(
        scope.current,
        { scale: 0.5, opacity: 0.5, delay: 0.3 },
        { duration: 0.1 }
      );
      await animate(
        scope.current,
        { x: animationDirection(directionAnimate, "vw"), opacity: 0.1 },
        { duration: 0.3 }
      );
    }
    if (isPresent) {
      presenseAnimate().then(() => setChildAnimate(true));
    } else {
      exitAnimate().then(() => {
        () => setChildAnimate(false);
        safeToRemove();
      });
    }
  }, [isPresent]);

  const modifiedChildren = useMemo(() => {
    return Children.map(children, (child) => {
      if (isValidElement(child) && child.type === DefaultFormInner) {
        return cloneElement(child, { childAnimate, ...child.props });
      }
      return child;
    });
  }, [children, childAnimate]);

  return (
    <PaperMotion
      data-testid="form_paper"
      ref={scope}
      className="h-full w-full rounded-tr-2xl rounded-tl-2xl"
      variant="elevation"
      square
      elevation={10}
    >
      {modifiedChildren}
    </PaperMotion>
  );
};

export { FormPaper };

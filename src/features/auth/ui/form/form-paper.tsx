import Paper from "@mui/material/Paper";
import { PropsWithChildren, useEffect, useId, useLayoutEffect } from "react";
import { useAnimate, usePresence } from "framer-motion";

type FormPaperPropsType = PropsWithChildren & {};

function getRandomSign() {
  return Math.random() < 0.5 ? -1 : 1;
}

const FormPaper = ({ children }: FormPaperPropsType) => {
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    async function presenseAnimate() {
      await animate(
        scope.current,
        { y: "0", opacity: 1 },
        { duration: 0.4, delay: 0.2 }
      );
    }

    async function exitAnimate() {
      await animate(
        scope.current,
        { scale: 0.5, opacity: 0.5 },
        { duration: 0.1 }
      );
      await animate(
        scope.current,
        { x: `${getRandomSign() * 100}vw`, opacity: 0.1 },
        { duration: 0.3 }
      );
    }
    if (isPresent) {
      presenseAnimate();
    } else {
      exitAnimate().then(() => safeToRemove());
    }
  }, [isPresent]);

  return (
    <Paper
      ref={scope}
      className="h-full w-full rounded-tr-2xl rounded-tl-2xl"
      variant="elevation"
      square
      elevation={10}
      sx={{ transform: "translateY(100vh)" }}
    >
      {children}
    </Paper>
  );
};

export { FormPaper };

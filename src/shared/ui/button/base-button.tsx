import { MouseEvent } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { useAnimate } from "framer-motion";

function BaseButton({ onClick, children, ...props }: ButtonProps) {
  const [scope, animate] = useAnimate();

  const BounceAnimate = async () => {
    await animate(
      scope.current,
      { scale: 0.97, opacity: 0.9 },
      { duration: 0.1 }
    );
    await animate(
      scope.current,
      { scale: 1.03, opacity: 0.95 },
      { duration: 0.2 }
    );
    await animate(scope.current, { scale: 1, opacity: 1 }, { duration: 0.05 });
  };

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    BounceAnimate();
    if (onClick) onClick(event);
  };

  return (
    <Button ref={scope} variant="contained" {...props} onClick={onClickHandler}>
      {children}
    </Button>
  );
}

export { BaseButton };

import React, { useState } from "react";
import cls from "./BugButton.module.scss";
import { classNames } from "shared/helpers/classNames/classNames";

export interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
  const [errorThrown, setErrorThrown] = useState(false);

  const handleClick = () => {
    if (!errorThrown) {
      setErrorThrown(true);
      throw new Error("Intentionally thrown error");
    } else {
      setErrorThrown(false);
    }
  };

  return (
    <div className={classNames(cls.BugButton, {}, [className || ""])}>
      <button onClick={handleClick}>Throw Error</button>
    </div>
  );
};

/// <reference types='react' />

import * as React from "react";

interface EventHandlerFn {
  (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

interface RenderPropsTestProps {
  children(
    handleMouseMove: EventHandlerFn,
    handleMouseEnter: EventHandlerFn,
    handleMouseLeave: EventHandlerFn
  ): JSX.Element;
}

const RenderPropsTest: React.FC<RenderPropsTestProps> = ({ children }) => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [isInFocus, setIsInFocus] = React.useState(false);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    setX(e.clientX + 15);
    setY(e.clientY + 15);
  };

  const handleMouseEnter = () => {
    setIsInFocus(true);
  };
  const handleMouseLeave = () => {
    setIsInFocus(false);
  };

  return (
    <div>
      {children(handleMouseMove, handleMouseEnter, handleMouseLeave)}
      {isInFocus && (
        <div className="mover" style={{ top: y, left: x }}>
          I am behind you
        </div>
      )}
    </div>
  );
};

export default RenderPropsTest;

import React, { useContext } from "react";
import { Context as TestContext, ITestActions } from "../Recons/Test.Recon";
import RenderPropsTest from "./RenderPropsTestComp";

const Comp2: React.FC = () => {
  console.log("Comp2 rendered");
  const { actions } = useContext(TestContext);
  const { updateVal, resetVal } = actions as ITestActions;
  return (
    <RenderPropsTest>
      {(handleMouseMove, handleMouseEnter, handleMouseLeave) => (
        <div
          className="compWrap"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h1>Component 2</h1>
          <p>
            <button
              onClick={() => {
                updateVal("val1", "Hello");
              }}
            >
              Update Value1
            </button>
            <button
              onClick={() => {
                resetVal("val1");
              }}
            >
              Reset Value1
            </button>
            <br />
            <button
              onClick={() => {
                updateVal("val2", "World");
              }}
            >
              Update Value2
            </button>
            <button
              onClick={() => {
                resetVal("val2");
              }}
            >
              Reset Value2
            </button>
          </p>
        </div>
      )}
    </RenderPropsTest>
  );
};

export default Comp2;

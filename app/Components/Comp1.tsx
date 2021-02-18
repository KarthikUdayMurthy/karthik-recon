import React, { useContext } from "react";
import { Context as TestContext } from "../Recons/Test.Recon";

const Comp1: React.FC = () => {
  console.log("Comp1 rendered");
  const {
    state: { val1, val2 }
  } = useContext(TestContext);
  return (
    <div className="compWrap">
      <h1>Component 1</h1>
      <p>Value1: {val1}</p>
      <p>Value2: {val2}</p>
    </div>
  );
};

export default Comp1;

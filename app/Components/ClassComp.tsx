import * as React from "react";
import { Context as TestContext } from "../Recons/Test.Recon";

export default class ClassComp extends React.Component {
  static contextType = TestContext;

  render() {
    console.log("ClassComp rendered");
    const { val1, val2 } = (this.context as React.ContextType<
      typeof TestContext
    >).state;
    return (
      <div className="compWrap">
        <h1>Class Component</h1>
        <p>Value1: {val1}</p>
        <p>Value2: {val2}</p>
      </div>
    );
  }
}

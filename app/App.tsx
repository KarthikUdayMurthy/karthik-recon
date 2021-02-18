import * as React from "react";
import { Provider as TestProvider } from "./Recons/Test.Recon";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import ClassComp from "./Components/ClassComp";

const App: React.FC = () => {
  console.log("App rendered");
  return (
    <TestProvider>
      <Comp1 />
      <Comp2 />
      <ClassComp />
    </TestProvider>
  );
};

export default App;

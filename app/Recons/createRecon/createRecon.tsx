import * as React from "react";
import * as ReconTypes from "./ReconTypes";

// createActionObj function

export function createActionObj<T extends string, P>(
  type: T,
  payload: P
): ReconTypes.IReconActionObj<T, P> {
  return { type, payload };
}

// createContext function

export function createRecon<
  TState,
  TBAs extends ReconTypes.IReconBoundActions,
  TAObjs extends ReconTypes.IReconActionObjBase
>(
  reducer: React.Reducer<TState, TAObjs>,
  actions: ReconTypes.IReconActions<TAObjs, TBAs>,
  initialState: TState
): {
  Context: React.Context<ReconTypes.IReconContextValue<TState, TBAs>>;
  Provider: React.FC;
} {
  // create Context
  let Context = React.createContext<
    ReconTypes.IReconContextValue<TState, TBAs>
  >({ state: initialState });

  // create Provider Component
  const Provider: React.FC = ({ children }) => {
    // React's useReducer hook to manage state and updates
    const [state, dispatch] = React.useReducer(reducer, initialState);

    // loop through all passed actions and call each with dispatch
    const boundActions: TBAs | {} = {};

    for (let key in actions) {
      (boundActions as TBAs)[key] = actions[key](dispatch);
    }

    // return the Provider component with children inside.
    return (
      <Context.Provider value={{ state, actions: boundActions as TBAs }}>
        {children}
      </Context.Provider>
    );
  };

  // return both Context and Provider Component
  return { Context, Provider };
}

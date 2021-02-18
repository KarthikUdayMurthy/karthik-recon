/// <reference types='react' />
import {
  createActionObj,
  createRecon,
  IReconActionObjBase,
  IReconAction,
  IReconActions,
  IReconBoundActions
} from "./createRecon";

export interface ITestState {
  [index: string]: unknown;
  val1: string;
  val2: string;
}

export interface ITestActions extends IReconBoundActions {
  updateVal: (key: string, value: string) => void;
  resetVal: (key: string) => void;
}

export enum ITestContextActionTypes {
  update = "update",
  reset = "reset"
}

export interface ITestContextUpdateValActionObj extends IReconActionObjBase {
  type: ITestContextActionTypes.update;
  payload: {
    key: string;
    value: string;
  };
}

export interface ITestContextResetValActionObj extends IReconActionObjBase {
  type: ITestContextActionTypes.reset;
  payload: {
    key: string;
  };
}

type ITestContextActionObjs =
  | ITestContextUpdateValActionObj
  | ITestContextResetValActionObj;

const INITIAL_STATE: ITestState = {
  val1: "Initial Value1",
  val2: "Initial Value2"
};

const TestReducer: React.Reducer<ITestState, ITestContextActionObjs> = (
  state,
  action
) => {
  switch (action.type) {
    case ITestContextActionTypes.update:
      return { ...state, [action.payload.key]: action.payload.value };
    case ITestContextActionTypes.reset:
      return {
        ...state,
        [action.payload.key]: INITIAL_STATE[action.payload.key]
      };
    default:
      return state;
  }
};

const updateVal: IReconAction<
  ITestContextUpdateValActionObj,
  ITestActions["updateVal"]
> = dispatch => (key, value) => {
  const aObj = createActionObj(ITestContextActionTypes.update, { key, value });
  dispatch(aObj);
};

const resetVal: IReconAction<
  ITestContextResetValActionObj,
  ITestActions["resetVal"]
> = dispatch => key => {
  const aObj = createActionObj(ITestContextActionTypes.reset, { key });
  dispatch(aObj);
};

let actions: IReconActions<ITestContextActionObjs, ITestActions> = {
  updateVal,
  resetVal
};

export const { Context, Provider } = createRecon<
  ITestState,
  ITestActions,
  ITestContextActionObjs
>(TestReducer, actions, INITIAL_STATE);

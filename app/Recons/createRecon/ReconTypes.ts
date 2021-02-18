/// <reference types='react' />

// interfaces

export interface IReconBoundActions {
  [index: string]: Function;
}

export interface IReconActionObjBase {
  readonly type: unknown;
  readonly payload: unknown;
}

export interface IReconActionObj<T, P> extends IReconActionObjBase {
  readonly type: T;
  readonly payload: P;
}

export interface IReconAction<TAObj extends IReconActionObjBase, TBA> {
  (dispatch: React.Dispatch<TAObj>): TBA;
}

export type IReconActions<
  TAObjs extends IReconActionObjBase,
  TBAs extends IReconBoundActions
> = { [key in keyof TBAs]: IReconAction<TAObjs, TBAs[key]> };

export interface IReconContextValue<S, A> {
  readonly state: S;
  readonly actions?: A;
}

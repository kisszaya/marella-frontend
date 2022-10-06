export type Nullable<T> = {
  [Property in keyof T]: T[Property] | null;
};

export interface IReduxState {
  isLoading: boolean;
  error: string | null;
}

export type Nullable<T> = {
  [Property in keyof T]: T[Property] | null;
};

export interface ReduxState {
  isLoading: boolean;
  error: string | null;
}

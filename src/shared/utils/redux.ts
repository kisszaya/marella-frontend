import { PayloadAction } from "@reduxjs/toolkit";

export function pending<T extends { isLoading: boolean }>(state: T) {
  state.isLoading = true;
}

export function rejected<
  T extends { isLoading: boolean; error: string | null }
>(state: T, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

export function fulfilled<
  T extends { isLoading: boolean; error: string | null }
>(state: T) {
  state.isLoading = false;
  state.error = "";
}

// export function reset<T>(state: T, values: Array<keyof T>) {
//   for (let key of values) {
//     if (typeof state[key] === null) state[key] = null;
//   }
// }

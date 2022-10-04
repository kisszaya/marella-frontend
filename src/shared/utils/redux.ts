import { PayloadAction } from "@reduxjs/toolkit";

export function pending<T extends { isLoading: boolean }>(state: T) {
  state.isLoading = true;
}

export function rejected<T extends { isLoading: boolean; error: string | null }>(
  state: T,
  action: PayloadAction<string>
) {
  state.isLoading = false;
  state.error = action.payload;
}

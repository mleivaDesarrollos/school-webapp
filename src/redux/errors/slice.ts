import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ErrorState = {
  error: string | null;
};

const initialState: ErrorState = {
  error: null,
};

const errorSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    cleanError: (state) => {
      state.error = null;
    },
  },
});

export const { reducer, name, actions } = errorSlice;

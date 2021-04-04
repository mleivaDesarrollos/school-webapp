import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student } from 'types';

export type StudentState = {
  loaded: boolean;
  items: Student[];
};

const initialState: StudentState = {
  loaded: false,
  items: [],
};

const studentSlice = createSlice({
  name: 'studentList',
  initialState,
  reducers: {
    fetch: (state) => {
      state.loaded = false;
    },
    success: (state, action: PayloadAction<Student[]>) => {
      state.items = action.payload;
      state.loaded = true;
    },
    failure: (state) => {
      state.loaded = true;
    },
  },
});

export const { name, reducer, actions } = studentSlice;

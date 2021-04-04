import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StudentAdd } from 'types/student';

export type StudentAddState = {
  success: boolean;
  submitting: boolean;
  student: StudentAdd | null;
};

const initialState: StudentAddState = {
  submitting: false,
  success: false,
  student: null,
};

const studentAddSlice = createSlice({
  name: 'studentAdd',
  initialState,
  reducers: {
    submit: (state, action: PayloadAction<StudentAdd>) => {
      state.submitting = true;
      state.student = action.payload;
    },
    failureOnSubmit: (state) => {
      state.submitting = false;
      state.success = false;
    },
    success: (state) => {
      state.submitting = false;
      state.success = true;
    },
    reset: () => initialState,
  },
});

export const { name, actions, reducer } = studentAddSlice;

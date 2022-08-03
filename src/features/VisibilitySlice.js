import { createSlice } from "@reduxjs/toolkit";

export const VisibilitySlice = createSlice({
  name: "visibility",
  initialState: {
    value: false,
  },
  reducers: {
    visibilityOn: (state) => {
      return state.value === true;
    },
  },
});

export const { visibilityOn } = VisibilitySlice.actions;

export default VisibilitySlice.reducer;
